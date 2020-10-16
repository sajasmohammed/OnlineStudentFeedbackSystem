import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../../Services/token.service';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public form = {
    name: null,
    user_type: null,
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
    this.notify.success("User Created Successfully");
 }

  handleError(error) {
    this.notify.error(error.error.message);
  }

   ngOnInit() {
  }

}
