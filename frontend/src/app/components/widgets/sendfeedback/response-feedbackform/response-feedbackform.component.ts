import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-response-feedbackform',
  templateUrl: './response-feedbackform.component.html',
  styleUrls: ['./response-feedbackform.component.css']
})
export class ResponseFeedbackformComponent implements OnInit {

  public loggedIn: boolean;
  

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient,
    private Auth: AuthService
  ) { 
    this.getStaffs();
    this.getSubject();
    
  }

  id:any="";
  staffs:any;
  subjects:any;
  searchText;

  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);  
  }

  getStaffs() {
    return this.http.get('http://localhost:8000/api/showStaffs').subscribe(res => {
      this.staffs = res;
  });
  }
  getSubject() {
    return this.http.get('http://localhost:8000/api/showSubjects').subscribe(res => {
      this.subjects = res;
  });
  }
  
  onSubmit(event){
    var form=new FormData();
    form.append("lacturer_name", $("#addInputStaffName").val());
    form.append("subject", $("#addInputSubjectName").val());
    form.append("ques1", $("#addInputAsw1").val());
    form.append("ques2", $("#addInputAsw2").val());
    form.append("ques3", $("#addInputAsw3").val());
    form.append("ques4", $("#addInputAsw4").val());
    form.append("other", $("#addInputAny").val());
    
    this.jarwis.addFeedback(form).subscribe(res=>{
      var r:any=res;
      
      if(r.message){
        this.toastr.success(r.message)    
        event.target.disabled = true;
      }else{
        this.toastr.error(r.errormessage)
      }
    },error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }

}