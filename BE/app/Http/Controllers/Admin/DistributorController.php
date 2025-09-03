<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Libraries\Template;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Distributor;
use App\Http\Requests\DistributorRequest;
use Yajra\DataTables\Facades\DataTables;

class DistributorController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Distributor', 'distributor', 'view');
    }

    public function list()
    {
        $data = Distributor::latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return '
                    <button type="button" id="upd" data-id="' . my_encrypt($row->id_distributor) . '" class="btn btn-sm btn-action btn-relief-primary" data-bs-toggle="modal" data-bs-target="#modal-add-upd"><i data-feather="edit"></i>&nbsp;<span>Ubah</span></button>&nbsp;
                    <button type="button" id="del" data-id="' . my_encrypt($row->id_distributor) . '" class="btn btn-sm btn-action btn-relief-danger"><i data-feather="trash"></i>&nbsp;<span>Hapus</span></button>
                ';
            })
            ->make(true);
    }

    public function all()
    {
        $response = Distributor::select('id_distributor AS id', 'nama AS text')->orderBy('id_distributor', 'desc')->get();

        return Response::json($response);
    }

    public function show(Request $request)
    {
        $response = Distributor::find(my_decrypt($request->id));

        return Response::json($response);
    }

    public function save(DistributorRequest $request)
    {
        try {
            Distributor::updateOrCreate(
                [
                    'id_distributor' => $request->id_distributor,
                ],
                [
                    'nama' => $request->nama,
                ]
            );

            $response = ['title' => 'Berhasil!', 'text' => 'Data Sukses di Simpan!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['title' => 'Gagal!', 'text' => 'Data Gagal di Simpan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function del(Request $request)
    {
        $checking = is_valid_user($this->session->id, $request->password);
        if ($checking) {
            try {
                $data = Distributor::find(my_decrypt($request->id));

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
}
