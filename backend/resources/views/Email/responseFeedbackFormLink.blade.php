@component('mail::message')
# Feedback Form 

Click on the button below to Get Feedback

@component('mail::button', ['url' => 'http://localhost:4200/feedback_reponse?token='.$token])
Feedback Form
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
