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

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/admin-profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
