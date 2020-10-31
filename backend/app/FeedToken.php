<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeedToken extends Model
{
    protected $fillable = [
        'email', 'token', 'created_at'      
      ];  
}
