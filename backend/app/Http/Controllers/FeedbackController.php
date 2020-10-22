<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FeedbackRequest;

class FeedbackController extends Controller
{
    public function process(FeedbackRequest $request){
        return $this->getFeedbackTableRow($request)->get();
    }

    private function getFeedbackTableRow($request)
    {
        return DB::table('feedbacks')->where(['email' => $request->email,'token' =>$request->resetToken]);
    }
}
