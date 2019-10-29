<?php

use Illuminate\Http\Request;


//sign-in , sign-up and 
Route::post('/login', 'AuthController@login');

//View Bookiing Details

Route::group(['middleware'=> 'jwt.auth'], function($router){
	Route::get('/list-pending-booking', 'BookingController@pending');
	Route::get('/list-approved-booking', 'BookingController@approved');
});