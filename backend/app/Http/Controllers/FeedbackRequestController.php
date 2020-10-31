<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\FeedbackRequestMail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class FeedbackRequestController extends Controller
{
    public function sendEmail(Request $request)
    {
        if (!$this->validateEmail($request->email)) {
            return $this->failedResponse();
        }

        $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email)
    {
        $token = $this->createToken($email);
        Mail::to($email)->send(new FeedbackRequestMail($token));
    }

    public function createToken($email)
    {
        $oldToken = DB::table('feed_tokens')->where('email', $email)->first();

        if ($oldToken) {
            return $oldToken->token;
        }

        $token = str_random(60);
        $this->saveToken($token, $email);
        return $token;
    }

    public function saveToken($token, $email)
    {
        DB::table('feed_tokens')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

    public function validateEmail($email)
    {
        return !!Student::where('student_email', $email)->first();
    }

    public function failedResponse()
    {
        return response()->json([
            'error' => 'Email does\'t found on our database'
        ], Response::HTTP_NOT_FOUND);
    }

    public function successResponse()
    {
        return response()->json([
            'data' => 'Email is send successfully, please check your inbox'
        ], Response::HTTP_OK);
    }

}
