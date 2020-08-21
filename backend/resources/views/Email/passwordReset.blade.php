@component('mail::message')
# Change Password Request 

Click on the button below to Change Password

@component('mail::button', ['url' => 'http://localhost:4200/admin-response-reset?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
