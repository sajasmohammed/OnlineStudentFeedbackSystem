import { AuthService } from './../../../Services/auth.service';
import { TokenService } from './../../../Services/token.service';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form ={
    email:null,
    password:null,
  }
  public error=null;

  constructor(
    private jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    
  ) { }
  
  onSubmit(){
    this.jarwis.login(this.form).subscribe(
      data => this.handlerResponse(data),
      error => this.handlerError(error)
    )
  }

  handlerResponse(data){
    sessionStorage.setItem('loggedUser', data.user);
    sessionStorage.setItem('loggedUserType', data.user_type);

    if(data.user_type == 'admin'){
      this.Token.handle(data.access_token);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/admin-profile');
    }else{
      alert('Please try again, ...');
    }
    
  }

  handlerError(error){
      this.error = error.error.error;
  }
  
  ngOnInit(): void {
  }

}
