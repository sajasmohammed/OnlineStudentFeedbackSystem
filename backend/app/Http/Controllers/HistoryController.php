<?php

namespace App\Http\Controllers;

use App\history;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return History::get();
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
        $history =new History();
        $history->username=$request->username;
        $history->activity=$request->activity;
        $history->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\history  $history
     * @return \Illuminate\Http\Response
     */
    public function show(history $history)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\history  $history
     * @return \Illuminate\Http\Response
     */
    public function edit(history $history)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\history  $history
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, history $history)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\history  $history
     * @return \Illuminate\Http\Response
     */
    public function destroy(history $history)
    {
        //
    }
}
