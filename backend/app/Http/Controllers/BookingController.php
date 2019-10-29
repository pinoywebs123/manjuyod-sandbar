<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    
    public function pending()
    {
    	return 'pending booking';
    }

    public function approved()
    {
    	return 'approved booking';
    }
}
