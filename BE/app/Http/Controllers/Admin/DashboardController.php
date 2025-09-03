<?php

namespace App\Http\Controllers\Admin;

use App\Libraries\Template;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        return Template::load('admin', 'Dashboard', 'dashboard', 'view');
    }
}
