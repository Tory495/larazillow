<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class RealtorListingController extends Controller
{
    public function index()
    {
        $listings = Auth::user()->listings;

        return inertia('Realtor/Index', [
            'listings' => $listings
        ]);
    }
}
