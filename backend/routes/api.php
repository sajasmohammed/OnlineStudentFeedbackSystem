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
    Route::get('showSubjects', 'SubjectController@index');
    Route::get('showSubject/{id}', 'SubjectController@show');
    Route::any('addSubjects', 'SubjectController@store');
    Route::put('updateSubjects/{id}', 'SubjectController@update');
    Route::delete('deleteSubjects/{id}', 'SubjectController@destroy');
});