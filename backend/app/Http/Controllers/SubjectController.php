<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subject;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

use Illuminate\Support\Facades\Response;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Subject::get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'subname'=>'required',
        ]);
   
        if($validator->fails()){
            $arr=array('status'=>'true', 'message'=>$validator->errors()->all());    
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_subject= Subject::where('subname', $request->subname)->get()->toArray();  
            if($check_subject){
                $arr=array('status'=>'true', 'errormessage'=>'Subject Already Exists...');          
            }else{
                $s =new Subject();
                $s->subname=$request->subname;
                $s->save();
                $arr=array('status'=>'true', 'message'=>'Subject Added Successfully...');    
            }        
        }
        echo json_encode($arr);
    }

    public function show($id)
    {
        // Show single product
        return Subject::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      
        $validator = Validator::make($request->all(),[
            'subname'=>'required',
        ]);
   
        if($validator->fails()){
            $arr=array('status'=>'true', 'message'=>$validator->errors()->all());    
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_subject= Subject::where('subname', $request->subname)->get()->toArray();  
            if($check_subject){
                $arr=array('status'=>'true', 'errormessage'=>'Subject Already Exists...');          
            }else{
                $subject=Subject::find($request->id);
                $subject->subname=$request->subname;
                $subject->save();
                $arr=array('status'=>'true', 'message'=>'Subject Updated Successfully...');    
            }        
        }
        echo json_encode($arr);
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $validator = Validator::make($request->all(),[
            'id' => 'required'
        ]);

        if($validator->fails()){
            $arr=array('status'=>'true', 'message'=>$validator->errors()->all());    
            return response()->json(['error' => $validator->errors()->all()], 409);
        }
       
        try{
            $subject=Subject::where('id', $request->id)->delete();
            $arr=array('status'=>'true', 'message'=>'Subject Deleted Successfully');
        }catch(Exception $e){
            $arr=array('status'=>'true', 'error'=>'Subject can not Delete');
        }  
        
        // if ($id != null) {
        //     $subject = Subject::find($id);
        //     $subject->delete();    
        // }

    }
}
