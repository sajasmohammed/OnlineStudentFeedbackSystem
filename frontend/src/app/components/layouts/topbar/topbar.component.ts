import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private Auth: AuthService,
  ) {
    
   }

  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');
  }  
}
