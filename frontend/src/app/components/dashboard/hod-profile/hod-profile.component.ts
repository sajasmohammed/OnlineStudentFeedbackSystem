import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

declare var $: any;

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
    private router: Router,
    private toastr: ToastrService,
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
