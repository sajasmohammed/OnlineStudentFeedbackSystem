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
        return DB::table('feed_tokens')->where(['email' => $request->email,'token' =>$request->token]);
    }

    private function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Token or Email is incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function store(Request $request)
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
                    $feedback->lacturer_name=$request->lacturer_name;
                    $feedback->subject=$request->subject;
                    $feedback->ques1=$request->ques1;
                    $feedback->ques2=$request->ques2;
                    $feedback->ques3=$request->ques3;
                    $feedback->ques4=$request->ques4;
                    $feedback->other=$request->other;
                    $feedback->save();
                 
                    $arr=array('status'=>'true', 'message'=>'Feedback Sended Successfully...');    
                        
            }
        echo json_encode($arr);
    
    }
}
