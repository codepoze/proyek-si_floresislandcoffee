<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Libraries\Template;
use App\Models\Subscriber;
use Yajra\DataTables\Facades\DataTables;

class SubscriberController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Subscriber', 'subscriber', 'view');
    }

    public function list()
    {
        $data = Subscriber::latest('id_subscriber')->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('created_at', function ($row) {
                return sql_datetime($row->created_at);
            })
            ->make(true);
    }
}
