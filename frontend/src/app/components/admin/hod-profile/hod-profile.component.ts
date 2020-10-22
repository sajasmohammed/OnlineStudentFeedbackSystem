import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod-profile',
  templateUrl: './hod-profile.component.html',
  styleUrls: ['./hod-profile.component.css']
})
export class HodProfileComponent implements OnInit {

  public loggedIn: boolean;
  
  constructor(
    private Auth: AuthService,
    private Token: TokenService,
    private router: Router
  ) { }
  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');
  }
  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
