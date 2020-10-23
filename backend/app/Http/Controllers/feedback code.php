<?php

namespace App\Http\Controllers;

use App\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

use Illuminate\Support\Facades\Response;

use Illuminate\Support\Facades\DB;

use App\Http\Requests\FeedbackRequestController;

class FeedbackController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Feedback::get();
    }

    public function process(FeedbackRequest $request)
    {
        return $this->getFeedbackTableRow($request)->count()> 0 ? $this->store($request) : $this->tokenNotFoundResponse();
    }

    private function getFeedbackTableRow(Request $request)
    {
        return DB::table('feedbacks')->where(['email' => $request->email,'token' =>$request->resetToken]);
    }

    private function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Token or Email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store( $request)
    {
        $validator = Validator::make($request->all(),[

            'lacturer_name'=>'required',
            'subject'=>'required',
            'ques1'=>'required',
            'ques2'=>'required',
            'ques3'=>'required',
            'ques4'=>'required',
            'other'=>'required',
            
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
                $feedback =new Feedback();
                
                // $feedback = Feedback::whereEmail($request->email)->first();
                $feedback->lacturer_name=$request->lacturer_name;
                $feedback->subject=$request->subject;
                $feedback->ques1=$request->ques1;
                $feedback->ques2=$request->ques2;
                $feedback->ques3=$request->ques3;
                $feedback->ques4=$request->ques4;
                $feedback->other=$request->other;
                $feedback->save();
                $this->getFeedbackTableRow($request)->delete();
                // return response()->json(['data'=>'Submited Successfully'],Response::HTTP_CREATED);

                $arr=array('status'=>'true', 'message'=>'Added Successfully...');    
                    
        }
        echo json_encode($arr);
    }
}
