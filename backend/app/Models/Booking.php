<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Status;

class Booking extends Model
{

    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }
}
