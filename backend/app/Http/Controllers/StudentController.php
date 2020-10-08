<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

use Illuminate\Support\Facades\Response;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Student::get();
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
            'student_id'=>'required',
            'student_batchno'=>'required',
            'student_email'=>'required'
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_studentid= Student::where('student_id', $request->student_id)->get()->toArray();  
            if($check_studentid){
                $arr=array('status'=>'true', 'errormessage'=>'Student Already Exists...');  
            }
            else{
                $student =new Student();
                $student->student_id=$request->student_id;
                $student->student_batchno=$request->student_batchno;
                $student->student_email=$request->student_email;
                $student->save();
                $arr=array('status'=>'true', 'message'=>'Added Successfully...');    
            }        
        }
        echo json_encode($arr);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'student_id'=>'required',
            'student_batchno'=>'required',
            'student_email'=>'required'
        ]);
   
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()], 409);   
        }else{  
            $check_subjectid= Student::where('subject_id', $request->subject_id)->get()->toArray();  
            $check_subjectbatchno= Student::where('subject_batchno', $request->subject_batchno)->get()->toArray();  
            $check_subjectemail= Student::where('subject_email', $request->subject_email)->get()->toArray();  
            if($check_subjectid){
                $arr=array('status'=>'true', 'errormessage'=>'Student ID Already Exists...');  
            }
            if($check_subjectbatchno){
                $arr=array('status'=>'true', 'errormessage'=>'Student Batch No Already Exists...');  
            }
            if($check_subjectemail){
                $arr=array('status'=>'true', 'errormessage'=>'Student Email Already Exists...');  
            }
            else{    
                $student=Student::find($request->id);
                $student->student_id=$request->student_id;
                $student->student_batchno=$request->student_batchno;
                $student->student_email=$request->student_email;
                $student->save();
                $arr=array('status'=>'true', 'message'=>'Staff Updated Successfully...');       
            }
        }
        echo json_encode($arr);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try{
            $student=Student::where('id', $request->id)->delete();
            $arr=array('status'=>'true', 'message'=>'Student Deleted Successfully');
        }catch(Exception $e){
            $arr=array('status'=>'true', 'error'=>'Student can not Delete');
        }  
        echo json_encode($arr);
    }
}
