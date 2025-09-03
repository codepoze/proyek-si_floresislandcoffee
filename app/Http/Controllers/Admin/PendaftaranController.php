<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PendaftaranRequest;
use App\Libraries\Pdf;
use App\Libraries\Template;
use App\Models\Metode;
use App\Models\Pendaftaran;
use App\Models\PendaftaranProduk;
use App\Models\Produk;
use App\Models\TPendaftaranProduk;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Yajra\DataTables\Facades\DataTables;

class PendaftaranController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Pendaftaran', 'pendaftaran', 'view');
    }

    public function create()
    {
        $produk = DB::table('produk AS p')
            ->leftJoin('pendaftaran_produk AS pp', 'p.id_produk', '=', 'pp.id_produk')
            ->select(
                'p.id_produk',
                'p.nama',
                'p.tipe',
                DB::raw("COUNT(pp.id_produk) AS jumlah")
            )
            ->groupBy('p.id_produk', 'p.nama', 'p.tipe')
            ->orderByDesc('jumlah')
            ->get();

        $data = [
            'produk' => $produk,
        ];

        return Template::load('admin', 'Tambah', 'pendaftaran', 'create', $data);
    }

    public function detail($id)
    {
        $id = my_decrypt($id);

        $data = [
            'pendataran' => Pendaftaran::with(['toMetode', 'toDistributor'])->find($id),
        ];

        return Template::load('admin', 'Detail', 'pendaftaran', 'detail', $data);
    }

    public function list()
    {
        $date = Carbon::now();
        $from = $date->startOfDay()->format('Y-m-d H:i:s');
        $to   = $date->endOfDay()->format('Y-m-d H:i:s');

        $data = Pendaftaran::with(['toMetode', 'toDistributor'])->whereBetween('created_at', [$from, $to])->latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('distributor', function ($row) {
                return $row->toDistributor->nama ?? '-';
            })
            ->addColumn('no_so', function ($row) {
                return $row->no_so ?? '-';
            })
            ->addColumn('nama', function ($row) {
                return $row->nama ?? '-';
            })
            ->addColumn('tujuan', function ($row) {
                return $row->tujuan ?? '-';
            })
            ->addColumn('no_hp', function ($row) {
                return $row->no_hp ?? '-';
            })
            ->addColumn('no_identitas', function ($row) {
                return $row->no_identitas ?? '-';
            })
            ->addColumn('tanggal', function ($row) {
                return tgl_indo($row->created_at);
            })
            ->addColumn('jam', function ($row) {
                return get_waktu($row->created_at);
            })
            ->addColumn('status', function ($row) {
                if ($row->status == 'menunggu') {
                    return '<span class="badge bg-warning">Menunggu</span>';
                } elseif ($row->status == 'memanggil') {
                    return '<span class="badge bg-success">Memanggil</span>';
                } elseif ($row->status == 'selesai') {
                    return '<span class="badge bg-danger">Selesai</span>';
                }
            })
            ->addColumn('action', function ($row) {
                if ($row->status == 'menunggu') {
                    return '
                        <a href="' . route('admin.pendaftaran.detail', my_encrypt($row->id_pendaftaran)) . '" class="btn btn-sm btn-action btn-relief-primary"><i data-feather="eye"></i>&nbsp;<span>Detail</span></a>&nbsp;    
                        <a href="' . route('admin.pendaftaran.print', my_encrypt($row->id_pendaftaran)) . '" target="_blank" class="btn btn-sm btn-action btn-relief-success"><i data-feather="printer"></i>&nbsp;<span>Cetak</span></a>&nbsp;
                        <button type="button" id="del" data-id="' . my_encrypt($row->id_pendaftaran) . '" class="btn btn-sm btn-action btn-relief-danger"><i data-feather="trash"></i>&nbsp;<span>Hapus</span></button>
                    ';
                } else {
                    return '
                        <a href="' . route('admin.pendaftaran.detail', my_encrypt($row->id_pendaftaran)) . '" class="btn btn-sm btn-action btn-relief-primary"><i data-feather="eye"></i>&nbsp;<span>Detail</span></a>&nbsp;    
                        <a href="' . route('admin.pendaftaran.print', my_encrypt($row->id_pendaftaran)) . '" target="_blank" class="btn btn-sm btn-action btn-relief-success"><i data-feather="printer"></i>&nbsp;<span>Cetak</span></a>&nbsp;
                    ';
                }
            })
            ->rawColumns(['status', 'action'])
            ->make(true);
    }

    public function save(PendaftaranRequest $request)
    {
        DB::beginTransaction();
        try {
            $no_antrean = $this->generateNoAntrean($request->id_metode);

            $pendataran                 = new Pendaftaran();
            $pendataran->id_metode      = $request->id_metode;
            $pendataran->id_distributor = $request->id_distributor;
            $pendataran->no_antrean     = $no_antrean;
            $pendataran->no_pol         = $request->no_pol;
            $pendataran->no_so          = $request->no_so;
            $pendataran->nama           = $request->nama;
            $pendataran->tujuan         = $request->tujuan;
            $pendataran->no_hp          = $request->no_hp;
            $pendataran->no_identitas   = $request->no_identitas;
            $pendataran->save();

            $t_pendaftaran_produk = TPendaftaranProduk::all();

            foreach ($t_pendaftaran_produk as $key => $value) {
                $pendaftaran_produk = new PendaftaranProduk();
                $pendaftaran_produk->id_pendaftaran = $pendataran->id_pendaftaran;
                $pendaftaran_produk->id_produk      = $value->id_produk;
                $pendaftaran_produk->qty            = $value->qty;
                $pendaftaran_produk->palet          = $value->palet;
                $pendaftaran_produk->remark         = $value->remark;
                $pendaftaran_produk->save();

                $value->delete();
            }

            DB::commit();

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Simpan!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success', 'url' => route('admin.pendaftaran.detail', my_encrypt($pendataran->id_pendaftaran))];
        } catch (\Exception $e) {
            DB::rollBack();

            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Simpan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function del(Request $request)
    {
        $checking = is_valid_user($this->session->id, $request->password);
        if ($checking) {
            try {
                $data = Pendaftaran::find(my_decrypt($request->id));

                $data->delete();

                $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Hapus!', 'type' => 'success', 'button' => 'Ok!', 'class' => 'success'];
            } catch (\Exception $e) {
                $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Hapus!', 'type' => 'error', 'button' => 'Ok!', 'class' => 'danger'];
            }
        } else {
            $response = ['title' => 'Maaf!', 'text' => 'Password Anda Salah!', 'type' => 'warning', 'button' => 'Ok!', 'class' => 'warning'];
        }

        return Response::json($response);
    }

    public function print($id)
    {
        $id = my_decrypt($id);

        $data = [
            'pendaftaran' => Pendaftaran::with(['toMetode', 'toDistributor', 'toPendaftaranProduk'])->find($id),
        ];

        return Pdf::printPdf('Pendaftaran', 'admin.pendaftaran.print', 'A4', 'potrait', $data);
    }

    private function generateNoAntrean($id_metode)
    {
        $inisial = Metode::find($id_metode)->inisial;
        $today   = Carbon::today()->toDateString();

        $antrean = Pendaftaran::where('id_metode', $id_metode)->where('created_at', '>=', $today . ' 00:00:00')->count();

        if ($antrean == 0) {
            $newNumber = 1;
        } else {
            $newNumber = $antrean + 1;
        }

        $no_antrean = $inisial . $newNumber;

        return $no_antrean;
    }
}
