<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'student_id', 'student_batchno', 'student_course', 'student_email',       
    ];
}
