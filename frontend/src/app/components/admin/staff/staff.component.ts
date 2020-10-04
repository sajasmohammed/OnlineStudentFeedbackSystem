import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient
  ) { 
    this.getStaffs();
  }

  id:any="";
  staffs:any;
  searchText

  ngOnInit(): void {
    
  }

  getStaffs() {
    return this.http.get('http://localhost:8000/api/showStaffs').subscribe(res => {
      this.staffs = res;
  });
  }
  
  add(){
    var form=new FormData();
    
    form.append("name", $("#addInputStaffName").val());
    form.append("subject", $("#addInputStaffSubject").val());
    this.jarwis.addStaff(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getStaffs();
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
     this.jarwis.deleteStaff(id).subscribe(res=>{
      var r:any=res;
        this.toastr.success(r.message);
        this.getStaffs();
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }
  update(id){
    var form=new FormData();
    form.append("id", this.id);
    form.append("name", $("#updateInputStaffName").val());
    form.append("subject", $("#updateInputStaffSubject").val());

    this.jarwis.updateStaff(form).subscribe(res=>{
      
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getStaffs();
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
    this.staffs.forEach(el => {
      if(id==el.id){
        this.id=el.id;
        $("#updateInputStaffName").prop("value", el.name);
        $("#updateInputStaffSubject").prop("value", el.subject);
      } 
    });
  }
}
