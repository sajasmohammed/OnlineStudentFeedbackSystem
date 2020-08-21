import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');
  }

}
