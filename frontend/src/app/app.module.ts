import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HodProfileComponent } from './components/hod-profile/hod-profile.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StaffProfileComponent } from './components/staff-profile/staff-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CourseComponent } from './components/course/course.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BatchComponent } from './components/batch/batch.component';
import { StaffComponent } from './components/staff/staff.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    HodProfileComponent,
    StudentProfileComponent,
    StaffProfileComponent,
    FooterComponent,
    TopbarComponent,
    CourseComponent,
    SubjectComponent,
    SidebarComponent,
    BatchComponent,
    StaffComponent,
    
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
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
