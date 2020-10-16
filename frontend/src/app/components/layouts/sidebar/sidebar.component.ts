import { Router } from '@angular/router';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public loggedIn: boolean;
  
  
  constructor(
    private Auth: AuthService,
    private router: Router,
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
