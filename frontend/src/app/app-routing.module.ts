import { MainContainerComponent } from './components/layouts/main-container/main-container.component';
import { FeedbackresultComponent } from './components/widgets/feedbackresult/feedbackresult.component';
import { ResponseFeedbackformComponent } from './components/widgets/sendfeedback/response-feedbackform/response-feedbackform.component';
import { RequestFeedbackformComponent } from './components/widgets/sendfeedback/request-feedbackform/request-feedbackform.component';
import { StudentComponent } from './components/widgets/student/student.component';
import { StaffComponent } from './components/widgets/staff/staff.component';
import { BatchComponent } from './components/widgets/batch/batch.component';
import { CourseComponent } from './components/widgets/course/course.component';
import { SubjectComponent } from './components/widgets/subject/subject.component';
import { StaffProfileComponent } from './components/dashboard/staff-profile/staff-profile.component';
import { StudentProfileComponent } from './components/dashboard/student-profile/student-profile.component';
import { HodProfileComponent } from './components/dashboard/hod-profile/hod-profile.component';
import { RequestResetComponent } from './components/auth/password/request-reset/request-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { LoginComponent } from './components/auth/login/login.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ResponseResetComponent } from './components/auth/password/response-reset/response-reset.component';

const appRoute: Routes=[
  
  { path: '', component: LoginComponent, canActivate: [BeforeLoginService]},
  { path: 'signup', component: SignupComponent, canActivate: [AfterLoginService] },
  { path: 'admin-profile', component: ProfileComponent},
  { path: 'request-reset', component: RequestResetComponent, canActivate: [BeforeLoginService]},
  { path: 'response-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: 'hod-profile', component: HodProfileComponent},
  { path: 'student-profile', component: StudentProfileComponent},
  { path: 'staff-profile', component: StaffProfileComponent},
  { path: 'subject', component: SubjectComponent, canActivate: [AfterLoginService]},
  { path: 'course', component: CourseComponent, canActivate: [AfterLoginService]},
  { path: 'batch', component: BatchComponent, canActivate: [AfterLoginService]},
  { path: 'staff', component: StaffComponent, canActivate: [AfterLoginService]},
  { path: 'student', component: StudentComponent, canActivate: [AfterLoginService]},
  { path: 'feedback_request', component: RequestFeedbackformComponent, canActivate: [AfterLoginService]},
  { path: 'feedback_reponse', component: ResponseFeedbackformComponent, canActivate: [AfterLoginService]},
  { path: 'feedback_result', component: FeedbackresultComponent, canActivate: [AfterLoginService]},
  { path: 'main-container', component: MainContainerComponent, canActivate: [AfterLoginService]},
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
