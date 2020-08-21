import { HodResponseResetComponent } from './components/hod/hod-password/hod-response-reset/hod-response-reset.component';
import { HodRequestResetComponent } from './components/hod/hod-password/hod-request-reset/hod-request-reset.component';
import { HodProfileComponent } from './components/hod/hod-profile/hod-profile.component';
import { HodSignupComponent } from './components/hod/hod-signup/hod-signup.component';
import { HodLoginComponent } from './components/hod/hod-login/hod-login.component';
import { StudentResponseResetComponent } from './components/student/student-password/student-response-reset/student-response-reset.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { StudentSignupComponent } from './components/student/student-signup/student-signup.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';
import { RequestResetComponent } from './components/admin/password/request-reset/request-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { LoginComponent } from './components/admin/login/login.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { ResponseResetComponent } from './components/admin/password/response-reset/response-reset.component';

const appRoute: Routes=[
  { path: 'admin-login', component: LoginComponent, canActivate: [BeforeLoginService]},
  { path: 'admin-signup', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'admin-profile', component: ProfileComponent, canActivate: [AfterLoginService]},
  { path: 'admin-request-reset', component: RequestResetComponent, canActivate: [BeforeLoginService]},
  { path: 'admin-response-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: 'student-login', component: StudentLoginComponent, canActivate: [BeforeLoginService]},
  { path: 'student-signup', component: StudentSignupComponent, canActivate: [BeforeLoginService] },
  { path: 'student-profile', component: StudentProfileComponent, canActivate: [AfterLoginService]},
  { path: 'student-request-reset', component: StudentResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: 'student-response-reset', component: StudentResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: 'hod-login', component: HodLoginComponent, canActivate: [BeforeLoginService]},
  { path: 'hod-signup', component: HodSignupComponent, canActivate: [BeforeLoginService] },
  { path: 'hod-profile', component: HodProfileComponent, canActivate: [AfterLoginService]},
  { path: 'hod-request-reset', component: HodRequestResetComponent, canActivate: [BeforeLoginService]},
  { path: 'hod-response-reset', component: HodResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
