import { AuthService } from 'src/app/Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  public loggedIn: boolean;
  
  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient,
    private Auth: AuthService,
  
  ) { 
    this.getStudents();
    this.getBatches();
    this.getCourses();
  }

   id:any="";
   students:any;
   batches:any;
   courses:any;
   searchText;
   p:number=1;

  
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

   getStudents() {
    return this.http.get('http://localhost:8000/api/showStudents').subscribe(res => {
      this.students = res;
  });
  }

  getBatches() {
    return this.http.get('http://localhost:8000/api/showBatches').subscribe(res => {
      this.batches = res;
  });
  }

  getCourses() {
    return this.http.get('http://localhost:8000/api/showCourses').subscribe(res => {
      this.courses = res;
  });
  }
 
  
  add(){
    var form=new FormData();

    form.append("student_id", $("#addInputStudentID").val());
    form.append("student_batchno", $("#addInputStudentBatchNo").val());
    form.append("student_course", $("#addInputStudentCourse").val());
    form.append("student_email", $("#addInputStudentEmail").val());
    this.jarwis.addStudent(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getStudents();
      }else{
        this.toastr.error(r.errormessage)
      }
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }
  deleteID(id){
     this.jarwis.deleteStudent(id).subscribe(res=>{
      var r:any=res;
        this.toastr.success(r.message);
        this.getStudents();
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })
  }
  update(id){
    var form=new FormData();
    form.append("id", this.id);
    form.append("student_id", $("#updateInputStudentID").val());
    form.append("student_batchno", $("#updateInputStudentBatchNo").val());
    form.append("student_course", $("#updateInputStudentCourse").val());
    form.append("student_email", $("#updateInputStudentEmail").val());

    this.jarwis.updateStudent(form).subscribe(res=>{
      
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getStudents();
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
    this.students.forEach(el => {
      if(id==el.id){
        this.id=el.id;
        $("#updateInputStudentID").prop("value", el.student_id);
        $("#updateInputStudentBatchNo").prop("value", el.student_batchno);
        $("#updateInputStudentCourse").prop("value", el.student_course);
        $("#updateInputStudentEmail").prop("value", el.student_email);
      } 
    });
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

}
