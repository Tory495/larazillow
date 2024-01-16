<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function index()
    {

    }

    public function show()
    {
        return inertia('Index/Show');
    }
}
