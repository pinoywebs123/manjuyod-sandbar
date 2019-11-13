<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\Models\Booking;
use Auth;

class BookingController extends Controller
{
    public function getBookings()
    {
        $bookings = Booking::where('user_id', Auth::id())->with('status')->get();
        return response()->json($bookings);
    }
    public function send(Request $request)
    {
        $booking = new Booking;
        $booking->user_id   = Auth::id();
        $booking->date      = $request->date;
        $booking->time      = $request->time;
        $booking->persons   = $request->person;
        $booking->status_id = 1;
        $booking->save();
        return response()->json(['data'=> $booking, 'status'=> 200]);
    }

    public function pending()
    {
    	return 'pending booking';
    }

    public function approved()
    {
    	return 'approved booking';
    }
}
