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
    public function index()
    {
        return Subject::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $validator = Validator::make($request->all(),[
            'subname' => 'required'
        ]);

        if($validator->fails()){
            return Response::json(['error' => $validator->errors()->all()], 409);
        }
        $subject=new Subject();
        $subject->subname=$request->subname;
        $subject->save();
        return Response::json(['message'=>'User Successfully Added']);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Subject::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        session(["key" => $request-> keywords]);
        $subjects=Subject::where(Function ($q){
            $value = session('key');
            $q-> where('subjects.id', 'LIKE', '%'.$value.'%')
                ->orwhere('subjects.subname', 'LIKE', '%'.$value.'%');
                
        })->get();
        return Response::json(['subjects'=>$subjects]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'subname' => 'required'
        ]);

        if($validator->fails()){
            return Response::json(['error' => $validator->errors()->all()], 409);
        }
        $subject=Subject::find($request->id);
        $subject->subname=$request->subname;
        $subject->save();
        
        return Response::json(['message'=>'User Successfully Updated']);
        
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
            return Response::json(['error' => $validator->errors()->all()], 409);
        }
       
        try{
            $subject=Subject::where('id', $request->id)->delete();
            return Response::json(['message'=>'User Successfully Deleted']);
        }catch(Exception $e){
            return Response::json(['error'=>('User canot be Deleted')], 409);
        }   

    }
}
