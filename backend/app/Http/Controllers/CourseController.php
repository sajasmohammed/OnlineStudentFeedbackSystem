<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

use Illuminate\Support\Facades\Response;


class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Course::get();
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
            'course_name'=>'required',
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_course= Course::where('course_name', $request->course_name)->get()->toArray();  
            if($check_course){
                $arr=array('status'=>'true', 'errormessage'=>'Course Already Exists...');          
            }else{
                $course =new Course();
                $course->course_name=$request->course_name;
                $course->save();
                $arr=array('status'=>'true', 'message'=>'Course Added Successfully...');    
            }        
        }
        echo json_encode($arr);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'course_name'=>'required',
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_course= Course::where('course_name', $request->course_name)->get()->toArray();  
            if($check_course){
                $arr=array('status'=>'true', 'errormessage'=>'Course Already Updated...');          
            }else{
                $course=Course::find($request->id);
                $course->course_name=$request->course_name;
                $course->save();
                $arr=array('status'=>'true', 'message'=>'Course Updated Successfully...');    
            }        
        }
        echo json_encode($arr);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try{
            $course=Course::where('id', $request->id)->delete();
            $arr=array('status'=>'true', 'message'=>'Course Deleted Successfully');
        }catch(Exception $e){
            $arr=array('status'=>'true', 'error'=>'Course can not Delete');
        }  
        echo json_encode($arr);
    }
}
