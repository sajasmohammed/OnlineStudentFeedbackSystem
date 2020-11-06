import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  public form = {
    email : null,
    password : null,
    password_confirmation:null,
    resetToken :null
  }
  public error=[];
  
  constructor(
    private route:ActivatedRoute,
    private Jarwis: JarwisService,
    private router:Router,
    private Notify:ToastrService
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit(){
   this.Jarwis.changePassword(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.Notify.error(error.error.error)
   )
  }
  handleResponse(response){
    if(this.Notify.success(response.data)){
      this.form.email = null;
      this.form.password = null;
      this.form.password_confirmation = null;
      this.form.resetToken = null;
      this.router.navigateByUrl('');
    }    
  }

  handleError(error){
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
