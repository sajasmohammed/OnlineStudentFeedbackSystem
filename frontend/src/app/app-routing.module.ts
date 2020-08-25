import { StaffProfileComponent } from './components/admin/staff-profile/staff-profile.component';
import { StudentProfileComponent } from './components/admin/student-profile/student-profile.component';
import { HodProfileComponent } from './components/admin/hod-profile/hod-profile.component';
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
  { path: '', component: LoginComponent, canActivate: [BeforeLoginService]},
  { path: 'admin-signup', component: SignupComponent, canActivate: [AfterLoginService] },
  { path: 'admin-profile', component: ProfileComponent, canActivate: [AfterLoginService]},
  { path: 'admin-request-reset', component: RequestResetComponent, canActivate: [BeforeLoginService]},
  { path: 'admin-response-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: 'hod-profile', component: HodProfileComponent, canActivate: [AfterLoginService]},
  { path: 'student-profile', component: StudentProfileComponent, canActivate: [AfterLoginService]},
  { path: 'staff-profile', component: StaffProfileComponent, canActivate: [AfterLoginService]},
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
