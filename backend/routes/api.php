<?php

Route::group([
    'middleware' => 'api',
], function ($router) {

    //Login Api
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');

    //Subject Api
    Route::get('subjects', 'SubjectController@index');
    Route::get('subjects/{id}', 'SubjectController@show');
    Route::post('subjects', 'SubjectController@store');
    Route::put('subjects/{id}', 'SubjectController@update');
    Route::delete('subjects/{id}', 'SubjectController@destroy');
});