import { Feedback } from './feedback.model';
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

  feedback=new Feedback();

  selectSkill1:any=[];

  ques1Skill=[
    {
      "key": "Very Good",
      "value": "vgood"
    },
    {
      "key": "Good",
      "value": "good"
    },
    {
      "key": "Fair",
      "value": "fair"
    },
    {
      "key": "Poor",
      "value": "poor"
    }
  ];

 
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
  
  add(){
    var form=new FormData();

    form.append("lacturer_name", $("#addInputStaffName").val());
    form.append("subject", $("#addInputSubjectName").val());
    form.append("ques1", $("#addInputAsw1").val());
    form.append("ques2", $("#addInputAsw2").val());
    form.append("ques3", $("#addInputAsw3").val());
    form.append("ques4", $("#addInputAsw4").val());
    form.append("other", $("#addInputAny").val());

     this.feedback.ques1=this.selectSkill1.toString();
    this.jarwis.addFeedback(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message)
      }else{
        this.toastr.error(r.errormessage)
      }
    },error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })
  }

  ques1SkillChange(event){
    let index=this.selectSkill1.indexOf(event.target.value);
    if(index == -1){
      this.selectSkill1.push(event.target.value);
    }else{
      this.selectSkill1.splice(index, 1);
    }
  }

  ques2SkillChange(event){
    let index=this.selectSkill1.indexOf(event.target.value);
    if(index == -1){
      this.selectSkill1.push(event.target.value);
    }else{
      this.selectSkill1.splice(index, 1);
    }
  }
  ques3SkillChange(event){
    let index=this.selectSkill1.indexOf(event.target.value);
    if(index == -1){
      this.selectSkill1.push(event.target.value);
    }else{
      this.selectSkill1.splice(index, 1);
    }
  }  
  ques4SkillChange(event){
    let index=this.selectSkill1.indexOf(event.target.value);
    if(index == -1){
      this.selectSkill1.push(event.target.value);
    }else{
      this.selectSkill1.splice(index, 1);
    }
  }

}
