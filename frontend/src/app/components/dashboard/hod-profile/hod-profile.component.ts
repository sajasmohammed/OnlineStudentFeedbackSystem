import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

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
  ) {}

  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');
  }
}
