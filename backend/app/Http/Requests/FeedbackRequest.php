<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeedbackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            
            'lacturer_name'=>'required',
            'subject'=>'required',
            'ques1'=>'required',
            'ques2'=>'required',
            'ques3'=>'required',
            'ques4'=>'required',
            'other'=>'required',
        ];
    }
}
