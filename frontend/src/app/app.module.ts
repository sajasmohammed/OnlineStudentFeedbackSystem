import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { PasswordComponent } from './components/admin/password/password.component';
import { RequestResetComponent } from './components/admin/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/admin/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { StudentComponent } from './components/student/student.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';
import { StudentSignupComponent } from './components/student/student-signup/student-signup.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { StudentPasswordComponent } from './components/student/student-password/student-password.component';
import { StudentResponseResetComponent } from './components/student/student-password/student-response-reset/student-response-reset.component';
import { HodComponent } from './components/hod/hod.component';
import { HodLoginComponent } from './components/hod/hod-login/hod-login.component';
import { HodSignupComponent } from './components/hod/hod-signup/hod-signup.component';
import { HodProfileComponent } from './components/hod/hod-profile/hod-profile.component';
import { HodPasswordComponent } from './components/hod/hod-password/hod-password.component';
import { HodResponseResetComponent } from './components/hod/hod-password/hod-response-reset/hod-response-reset.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    PasswordComponent,
    RequestResetComponent,
    ResponseResetComponent,
    StudentComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    StudentProfileComponent,
    StudentPasswordComponent,
    StudentResponseResetComponent,
    HodComponent,
    HodLoginComponent,
    HodSignupComponent,
    HodProfileComponent,
    HodPasswordComponent,
    HodResponseResetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
