import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
 
  public loggedIn: boolean;
  
  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient,
    private Auth: AuthService
  ) { 
    this.getSubjects();
  }

  id:any="";
  subjects:any;
  searchText;
  p:number=1;

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  getSubjects() {
    return this.http.get('http://localhost:8000/api/showSubjects').subscribe(res => {
      this.subjects = res;
  });
  }
  
  add(){
    var form=new FormData();

   // form.append("subname", $("#addInputName").val());
    form.append("subname", $("#addInputName").val());
    this.jarwis.addSubject(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getSubjects();
      }else{
        this.toastr.error(r.errormessage)
      }
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }
  delete(id){
     this.jarwis.deleteSubject(id).subscribe(res=>{
      var r:any=res;
        this.toastr.success(r.message);
        this.getSubjects();
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }
  update(id){
    var form=new FormData();
    form.append("id", this.id);
    form.append("subname", $("#updateInputSubName").val());

    this.jarwis.updateSubject(form).subscribe(res=>{
      
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getSubjects();
      }else{
        this.toastr.error(r.errormessage)
      }
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })
  }
  
  showUpdateModel(id){
    this.subjects.forEach(el => {
      if(id==el.id){
        this.id=el.id;
        $("#updateInputSubName").prop("value", el.subname);
      } 
    });
  }


}
