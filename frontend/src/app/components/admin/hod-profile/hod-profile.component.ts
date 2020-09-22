import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
import { error } from 'jquery';

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
    private jarwis: JarwisService,
    private toastr: ToastrService
  ) { }
  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');

  }

  add(){
    var form=new FormData();

    form.append("subname", $("#addInputName").val());

    this.jarwis.addData(form).subscribe(
      data => this.handlerResponse(data),
      error => this.toastr.error(error.error.message)
    )

  }
  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  handlerResponse(data){
    this.toastr.success(data.message);
  }
}
