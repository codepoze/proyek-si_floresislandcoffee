<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Libraries\Template;
use App\Models\Visitor;
use Yajra\DataTables\Facades\DataTables;

class VisitorController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Visitor', 'visitor', 'view');
    }

    public function list()
    {
        $data = Visitor::latest('id_visitor')->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('created_at', function ($row) {
                return sql_datetime($row->created_at);
            })
            ->make(true);
    }
}
