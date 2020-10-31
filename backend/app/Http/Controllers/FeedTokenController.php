<?php

namespace App\Http\Controllers;

use App\FeedToken;
use Illuminate\Http\Request;

class FeedTokenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FeedToken::get();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FeedToken  $feedToken
     * @return \Illuminate\Http\Response
     */
    public function show(FeedToken $feedToken)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FeedToken  $feedToken
     * @return \Illuminate\Http\Response
     */
    public function edit(FeedToken $feedToken)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FeedToken  $feedToken
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FeedToken $feedToken)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FeedToken  $feedToken
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        FeedToken::truncate();
    }
}
