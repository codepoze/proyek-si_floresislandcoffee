<?php

namespace App\Http\Controllers\Admin;

use App\Events\CallTheQueue;
use App\Http\Controllers\Controller;
use App\Libraries\Template;
use App\Models\Pendaftaran;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Yajra\DataTables\Facades\DataTables;

class AntreanController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Antrean', 'antrean', 'view');
    }

    public function list(Request $request)
    {
        if (isset($request->from) && isset($request->to)) {
            $from = $request->from;
            $to   = $request->to;
        } else {
            $date = Carbon::now();
            $from = $date->startOfDay()->format('Y-m-d H:i:s');
            $to   = $date->endOfDay()->format('Y-m-d H:i:s');
        }

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
                if ($row->status === 'menunggu') {
                    return '
                        <button type="button" id="btn-panggil" data-id="' . my_encrypt($row->id_pendaftaran) . '" data-no_antrean="' . $row->no_antrean . '" class="btn btn-sm btn-action btn-relief-primary"><i data-feather="info"></i>&nbsp;<span>Panggil</span></button>
                    ';
                } else {
                    return '
                        <button type="button" id="btn-panggil" data-id="' . my_encrypt($row->id_pendaftaran) . '" data-no_antrean="' . $row->no_antrean . '" class="btn btn-sm btn-action btn-relief-primary"><i data-feather="check"></i>&nbsp;<span>Dipanggil</span></button>
                    ';
                }
            })
            ->rawColumns(['status', 'action'])
            ->make(true);
    }

    public function memanggil(Request $request)
    {
        try {
            $id = my_decrypt($request->id);

            CallTheQueue::dispatch();

            $data = Pendaftaran::find($id);
            $data->status = 'memanggil';
            $data->save();

            $response = ['status' => true, 'title' => 'Berhasil!', 'text' => 'Berhasil dipanggil!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['status' => false, 'title' => 'Gagal!', 'text' => 'Gagal dipanggil!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }
}
