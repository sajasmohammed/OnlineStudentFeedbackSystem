import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  
  public loggedIn: boolean;
  sideBarOpen = true;

  
  constructor(
    private Auth: AuthService,
  ) { }
  
  userType = '';
  
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(userType => this.loggedIn = userType);
    this.userType = sessionStorage.getItem('loggedUserType');
   
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }  

  
  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

}
