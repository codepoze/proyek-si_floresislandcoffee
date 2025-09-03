<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Libraries\Template;
use App\Models\Metode;
use App\Models\Slider;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class DisplayController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Display', 'display', 'view');
    }

    public function list()
    {
        $date = Carbon::now();
        $from = $date->startOfDay()->format('Y-m-d H:i:s');
        $to   = $date->endOfDay()->format('Y-m-d H:i:s');

        $metode = Metode::where('aktif', 'y')->get();

        $result = [];
        foreach ($metode as $row) {
            $no_antrean = DB::table('pendaftaran as p')
                ->where('p.id_metode', $row->id_metode)
                ->whereBetween('p.created_at', [$from, $to])
                ->where('p.status', 'memanggil')
                ->orderByDesc('p.updated_at')
                ->limit(1)
                ->value('p.no_antrean');

            $result[] = [
                'nama'       => $row->nama,
                'no_antrean' => $no_antrean ?? '-',
            ];
        }

        return Response::json($result);
    }

    public function slider()
    {
        $slider = Slider::latest()->get();

        $result = [];

        foreach ($slider as $row) {
            $result[] = [
                asset_upload('/picture/slider/' . $row->gambar),
            ];
        }

        return Response::json($result);
    }
}
