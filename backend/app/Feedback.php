<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable = [
      'lacturer_name', 'subject', 'ques1', 'ques2', 'ques3', 'ques4', 'other'      
    ];  
}
