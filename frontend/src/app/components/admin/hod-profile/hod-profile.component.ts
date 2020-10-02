import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
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
  
  subjects:any;

  constructor(
    private Auth: AuthService,
    private Token: TokenService,
    private router: Router,
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.getSubjects();
   }
  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');
  }
  getSubjects() {
    return this.http.get('http://localhost:8000/api/showSubjects').subscribe(subjects => {
      this.subjects = subjects;
  });
  }
  deleteSubject(id) {
    
    this.http.delete('http://localhost:8000/api/deleteSubjects' + id).subscribe(res => {
        this.getSubjects();
    }, err => {
      this.toastr.error("Error Delete")
    });
}
  add(){
    var form=new FormData();

    form.append("subname", $("#addInputName").val());

    // this.jarwis.addSubject(form).subscribe( 
    //   data => this.handlerResponse(data),
    //   error => this.toastr.error(error.error.message)
    // )

    this.jarwis.addSubject(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message)
      }else{
        this.toastr.error(r.errormessage)
      }
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

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
