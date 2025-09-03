<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SliderRequest;
use App\Libraries\Template;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Yajra\DataTables\Facades\DataTables;

class SliderController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Slider', 'slider', 'view');
    }

    public function list()
    {
        $data = Slider::latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('gambar', function ($row) {
                return '<img src="' . asset_upload('/picture/slider/' . $row->gambar) . '" class="img-fluid" width="100">';
            })
            ->addColumn('action', function ($row) {
                return '
                    <button type="button" id="upd" data-id="' . my_encrypt($row->id_slider) . '" class="btn btn-sm btn-action btn-relief-primary" data-bs-toggle="modal" data-bs-target="#modal-add-upd"><i data-feather="edit"></i>&nbsp;<span>Ubah</span></button>&nbsp;
                    <button type="button" id="del" data-id="' . my_encrypt($row->id_slider) . '" class="btn btn-sm btn-action btn-relief-danger"><i data-feather="trash"></i>&nbsp;<span>Hapus</span></button>
                ';
            })
            ->rawColumns(['gambar', 'action'])
            ->make(true);
    }

    public function show(Request $request)
    {
        $response = Slider::find(my_decrypt($request->id));

        return Response::json($response);
    }

    public function save(SliderRequest $request)
    {
        try {
            if ($request->id_slider === null) {
                $gambar   = add_picture($request->gambar, 'slider');

                $slider            = new Slider();
                $slider->judul     = $request->judul;
                $slider->deskripsi = $request->deskripsi;
                $slider->gambar    = $gambar;
                $slider->save();
            } else {
                $slider = Slider::find($request->id_slider);

                if (isset($request->change_picture) && $request->change_picture === 'on') {
                    $gambar = upd_picture($request->gambar, $slider->gambar, 'slider/');

                    $slider->gambar = $gambar;
                }

                $slider->judul     = $request->judul;
                $slider->deskripsi = $request->deskripsi;
                $slider->save();
            }

            $response = ['status' => true, 'title' => 'Berhasil!', 'text' => 'Berhasil disimpan!', 'type' => 'success', 'button' => 'Okay!', 'class' => 'success'];
        } catch (\Exception $e) {
            $response = ['status' => false, 'title' => 'Gagal!', 'text' => 'Gagal disimpan!', 'type' => 'error', 'button' => 'Okay!', 'class' => 'danger'];
        }

        return Response::json($response);
    }

    public function del(Request $request)
    {
        $checking = is_valid_user($this->session->id, $request->password);
        if ($checking) {
            try {
                $data = Slider::find(my_decrypt($request->id));

                del_picture($data->gambar, 'slider/');

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
