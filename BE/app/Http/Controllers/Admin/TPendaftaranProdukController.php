<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TPendaftaranProdukRequest;
use App\Models\TPendaftaranProduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Yajra\DataTables\Facades\DataTables;

class TPendaftaranProdukController extends Controller
{
    public function list()
    {
        $data = TPendaftaranProduk::with(['toProduk.toSatuan'])->latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return '
                    <button type="button" id="upd-t_pendaftaran_produk" data-id="' . my_encrypt($row->id_t_pendaftaran_produk) . '" class="btn btn-sm btn-action btn-relief-primary" data-bs-toggle="modal" data-bs-target="#modal-upd-t_pendaftaran_produk"><i data-feather="edit"></i>&nbsp;<span>Ubah</span></button>&nbsp;
                    <button type="button" id="del-t_pendaftaran_produk" data-id="' . my_encrypt($row->id_t_pendaftaran_produk) . '" class="btn btn-sm btn-action btn-relief-danger"><i data-feather="trash"></i>&nbsp;<span>Hapus</span></button>
                ';
            })
            ->make(true);
    }

    public function show(Request $request)
    {
        $response = TPendaftaranProduk::find(my_decrypt($request->id));

        return Response::json($response);
    }

    public function store(TPendaftaranProdukRequest $request)
    {
        try {
            $id_produk = $request->id_produk;
            $qty       = $request->qty;
            $palet     = $request->palet;
            $remark    = $request->remark;

            foreach ($id_produk as $key => $value) {
                $t_pendaftaran_produk = new TPendaftaranProduk();
                
                $t_pendaftaran_produk->id_produk = $value;
                $t_pendaftaran_produk->qty       = $qty[$key];
                $t_pendaftaran_produk->palet     = $palet[$key];
                $t_pendaftaran_produk->remark    = $remark[$key];
                $t_pendaftaran_produk->save();
            }

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Simpan!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Simpan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function update(TPendaftaranProdukRequest $request)
    {
        try {
            $data = TPendaftaranProduk::find($request->id_t_pendaftaran_produk);

            $data->id_produk = $request->id_produk;
            $data->qty       = $request->qty;
            $data->palet     = $request->palet;
            $data->remark    = $request->remark;
            $data->save();

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Update!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Update!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function del(Request $request)
    {
        try {
            $data = TPendaftaranProduk::find(my_decrypt($request->id));

            $data->delete();

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Hapus!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Hapus!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }
}
