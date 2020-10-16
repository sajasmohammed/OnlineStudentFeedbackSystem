import { AuthService } from './../../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-request-feedbackform',
  templateUrl: './request-feedbackform.component.html',
  styleUrls: ['./request-feedbackform.component.css']
})
export class RequestFeedbackformComponent implements OnInit {
 
  public loggedIn: boolean;
  
  public form = {
    email: null
  };
  
  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient,
    private Auth: AuthService    
  ) { 
    this.getStudents();
  }

   id:any="";
   student_email:any="";
   students:any;
   searchText

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);  
  }

   getStudents() {
    return this.http.get('http://localhost:8000/api/showStudents').subscribe(res => {
      this.students = res;
    });
  }
  
  onSubmit() {
    this.toastr.info('Wait...' )
    this.jarwis.requestFeedbackFormLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.toastr.error(error.error.error)
    );
  }

  handleResponse(successResponse) {
    this.toastr.success(successResponse.data);
    this.form.email = null;
  }
   
 
}
