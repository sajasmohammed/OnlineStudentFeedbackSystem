<?php

namespace App\Http\Controllers;

use App\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

use Illuminate\Support\Facades\Response;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Staff::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'name'=>'required',
            'subject'=>'required',
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_staff= Staff::where('name', $request->name)->get()->toArray();  
            if($check_staff){
                $arr=array('status'=>'true', 'errormessage'=>'Staff Already Exists...');          
            }else{
                $staff =new Staff();
                $staff->name=$request->name;
                $staff->subject=$request->subject;
                $staff->save();
                $arr=array('status'=>'true', 'message'=>'Staff Added Successfully...');    
            }        
        }
        echo json_encode($arr);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function show(Staff $staff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function edit(Staff $staff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'subject'=>'required',
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_satff= Staff::where('name', $request->name)->get()->toArray();  
            if($check_satff){
                $arr=array('status'=>'true', 'errormessage'=>'Staff Already Updated...');          
            }else{
                $staff=Staff::find($request->id);
                $staff->name=$request->name;
                $staff->subject=$request->subject;
                $staff->save();
                $arr=array('status'=>'true', 'message'=>'Staff Updated Successfully...');    
            }        
        }
        echo json_encode($arr);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try{
            $staff=Staff::where('id', $request->id)->delete();
            $arr=array('status'=>'true', 'message'=>'Staff Deleted Successfully');
        }catch(Exception $e){
            $arr=array('status'=>'true', 'error'=>'Staff can not Delete');
        }  
        echo json_encode($arr);
    }
}
