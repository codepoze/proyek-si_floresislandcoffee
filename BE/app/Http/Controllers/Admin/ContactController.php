<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Libraries\Template;
use App\Models\Contact;
use Yajra\DataTables\Facades\DataTables;

class ContactController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Contact', 'contact', 'view');
    }

    public function list()
    {
        $data = Contact::latest()->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->make(true);
    }
}
