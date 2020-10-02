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
import { AsidebarComponent } from './components/admin/asidebar/asidebar.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { TopbarComponent } from './components/admin/topbar/topbar.component';


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
    AsidebarComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
