import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../../Services/token.service';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  public form = {
    name: null,
    user_type: 'student',
    email: null,
    password: null,
    password_confirmation: null
  };
  public error = null;
  public response=null;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private notify: ToastrService
   
  ) { }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
      
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.notify.success("Account Successfully Created");
 }

  handleError(error) {
    this.notify.error(error.error.message);
  }

   ngOnInit() {
  }

}
