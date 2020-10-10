import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public loggedIn: boolean;
  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient,
    private Auth: AuthService
  ) { 
    this.getCourses();
  }

  id:any="";
  courses:any;
  searchText

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  getCourses() {
    return this.http.get('http://localhost:8000/api/showCourses').subscribe(res => {
      this.courses = res;
  });
  }
  
  add(){
    var form=new FormData();

    form.append("course_name", $("#addInputCourseName").val());
    this.jarwis.addCourse(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getCourses();
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
     this.jarwis.deleteCourse(id).subscribe(res=>{
      var r:any=res;
        this.toastr.success(r.message);
        this.getCourses();
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }
  update(id){
    var form=new FormData();
    form.append("id", this.id);
    form.append("course_name", $("#updateInputCourseName").val());

    this.jarwis.updateCourse(form).subscribe(res=>{
      
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getCourses();
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
    this.courses.forEach(el => {
      if(id==el.id){
        this.id=el.id;
        $("#updateInputCourseName").prop("value", el.course_name);
      } 
    });
  }


}
