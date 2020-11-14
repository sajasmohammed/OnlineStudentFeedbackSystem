<?php

namespace App\Http\Controllers;

use App\Batches;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

use Illuminate\Support\Facades\Response;

class BatchesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Batches::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'batch_no'=>'required',
            'batch_name'=>'required',
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_batchno= Batches::where('batch_no', $request->batch_no)->get()->toArray(); 
            $check_batchname= Batches::where('batch_name', $request->batch_name)->get()->toArray(); 
            if($check_batchno){
                $arr=array('status'=>'true', 'errormessage'=>'Batch Already Exists...');  
            }
            else if($check_batchname){
                $arr=array('status'=>'true', 'errormessage'=>'Batch Name Already Exists...');  
            }
            else{
            
                $batches =new Batches();
                $batches->batch_no=$request->batch_no;
                $batches->batch_name=$request->batch_name;
                $batches->save();
                $arr=array('status'=>'true', 'message'=>'Batch Added Successfully...');    
            }  
        }
        echo json_encode($arr);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Batches  $batches
     * @return \Illuminate\Http\Response
     */
    public function show(Batches $batches)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Batches  $batches
     * @return \Illuminate\Http\Response
     */
    public function edit(Batches $batches)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Batches  $batches
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'batch_no'=>'required',
            'batch_name'=>'required',
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{ 
            $check_batchno= Batches::where('batch_no', $request->batch_no)->get()->toArray(); 
            $check_batchname= Batches::where('batch_name', $request->batch_name)->get()->toArray(); 
            if($check_batchno){
                $arr=array('status'=>'true', 'errormessage'=>'Batch No Already Exists...');  
                if($check_batchname){
                    $arr=array('status'=>'true', 'errormessage'=>'Batch Name Already Exists...');  
                }
            }
            
            else{
            
                $batches=Batches::find($request->id);
                $batches->batch_no=$request->batch_no;
                $batches->batch_name=$request->batch_name;
                $batches->save();
                $arr=array('status'=>'true', 'message'=>'Batch Updated Successfully...');  
            }
        }
        echo json_encode($arr);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Batches  $batches
     * @return \Illuminate\Http\Response
     */
    public function destroy(Batches $batches)
    {
        try{
            $batches=Batches::where('id', $request->id)->delete();
            $arr=array('status'=>'true', 'message'=>'Batch Deleted Successfully');
        }catch(Exception $e){
            $arr=array('status'=>'true', 'error'=>'Batch can not Delete');
        }  
        echo json_encode($arr);
    }
}
