import { TopbarComponent } from './components/layouts/topbar/topbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RequestResetComponent } from './components/auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CourseComponent } from './components/widgets/course/course.component';
import { SubjectComponent } from './components/widgets/subject/subject.component';
import { BatchComponent } from './components/widgets/batch/batch.component';
import { StaffComponent } from './components/widgets/staff/staff.component';
import { RequestFeedbackformComponent } from './components/widgets/sendfeedback/request-feedbackform/request-feedbackform.component';
import { ResponseFeedbackformComponent } from './components/widgets/sendfeedback/response-feedbackform/response-feedbackform.component';
import { StudentComponent } from './components/widgets/student/student.component';
import { ContentsComponent } from './components/layouts/contents/contents.component';
import { MainContainerComponent } from './components/layouts/main-container/main-container.component';
import { FeedbackresultComponent } from './components/widgets/feedbackresult/feedbackresult.component';
import { HistoryComponent } from './components/widgets/history/history.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FeedrequestsComponent } from './components/widgets/feedrequests/feedrequests.component';
import { StudentSignupComponent } from './components/auth/student-signup/student-signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    FooterComponent,
    TopbarComponent,
    CourseComponent,
    SubjectComponent,
    BatchComponent,
    StaffComponent,
    RequestFeedbackformComponent,
    ResponseFeedbackformComponent,
    StudentComponent,
    ContentsComponent,
    MainContainerComponent,
    FeedbackresultComponent,
    HistoryComponent,
    SidebarComponent,
    FeedrequestsComponent,
    StudentSignupComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,  
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
