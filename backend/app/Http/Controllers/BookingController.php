<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\Models\Booking;

class BookingController extends Controller
{
    public function send(Request $request)
    {
        if (! $user = JWTAuth::parseToken()->authenticate()) {
			return response()->json(['user_not_found'], 404);
        }

        $booking = new Booking;
        $booking->user_id   = $user->id;
        $booking->date      = $request->date;
        $booking->time      = $request->time;
        $booking->persons   = $request->person;
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
