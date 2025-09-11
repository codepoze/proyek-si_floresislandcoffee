<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TagRequest;
use App\Libraries\Template;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Yajra\DataTables\Facades\DataTables;

class TagController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Tag', 'tag', 'view');
    }

    public function list()
    {
        $data = Tag::latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return '
                    <button type="button" id="upd" data-id="' . my_encrypt($row->id_tag) . '" class="btn btn-sm btn-action btn-relief-primary" data-bs-toggle="modal" data-bs-target="#modal-add-upd"><i data-feather="edit"></i>&nbsp;<span>Ubah</span></button>&nbsp;
                    <button type="button" id="del" data-id="' . my_encrypt($row->id_tag) . '" class="btn btn-sm btn-action btn-relief-danger"><i data-feather="trash"></i>&nbsp;<span>Hapus</span></button>
                ';
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    public function show(Request $request)
    {
        $response = Tag::find(my_decrypt($request->id));

        return Response::json($response);
    }

    public function save(TagRequest $request)
    {
        try {
            Tag::updateOrCreate(
                [
                    'id_tag' => $request->id_tag,
                ],
                [
                    'name' => $request->name,
                    'slug' => Str::slug($request->name),
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
                $data = Tag::find(my_decrypt($request->id));

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
