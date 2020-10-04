<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batches extends Model
{
    protected $fillable = [
        'batch_no','batch_name'       
    ];
}
