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
    Route::any('showSubjects', 'SubjectController@index');
    Route::any('showSubject', 'SubjectController@show');
    Route::any('addSubjects', 'SubjectController@store');
    Route::any('updateSubjects', 'SubjectController@update');
    Route::any('deleteSubjects', 'SubjectController@destroy');
});