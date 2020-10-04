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
import { HodProfileComponent } from './components/admin/hod-profile/hod-profile.component';
import { StudentProfileComponent } from './components/admin/student-profile/student-profile.component';
import { StaffProfileComponent } from './components/admin/staff-profile/staff-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './components/admin/footer/footer.component';
import { TopbarComponent } from './components/admin/topbar/topbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CourseComponent } from './components/admin/course/course.component';
import { SubjectComponent } from './components/admin/subject/subject.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { BatchComponent } from './components/admin/batch/batch.component';
import { StaffComponent } from './components/admin/staff/staff.component';


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
