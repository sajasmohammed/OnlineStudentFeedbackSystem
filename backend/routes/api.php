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

    //FeedbackForm Api
    Route::post('requestFeedbackFormLink', 'FeedbackRequestController@sendEmail');
    Route::post('responseFeedbackFormLink', 'ChangePasswordController@process');
    Route::post('addFeedbacks', 'FeedbackController@store');
    
    //Subject Api
    Route::any('showSubjects', 'SubjectController@index');
    Route::any('addSubjects', 'SubjectController@store');
    Route::any('updateSubjects', 'SubjectController@update');
    Route::any('deleteSubjects', 'SubjectController@destroy');

    //Course Api
    Route::any('showCourses', 'CourseController@index');
    Route::any('addCourses', 'CourseController@store');
    Route::any('updateCourses', 'CourseController@update');
    Route::any('deleteCourses', 'CourseController@destroy');

    //Batch Api
    Route::any('showBatches', 'BatchesController@index');
    Route::any('addBatches', 'BatchesController@store');
    Route::any('updateBatches', 'BatchesController@update');
    Route::any('deleteBatches', 'BatchesController@destroy');

    //Staff Api
    Route::any('showStaffs', 'StaffController@index');
    Route::any('addStaffs', 'StaffController@store');
    Route::any('updateStaffs', 'StaffController@update');
    Route::any('deleteStaffs', 'StaffController@destroy');

    //Student Api
    Route::any('showStudents', 'StudentController@index');
    Route::any('addStudents', 'StudentController@store');
    Route::any('updateStudents', 'StudentController@update');
    Route::any('deleteStudents', 'StudentController@destroy');
});