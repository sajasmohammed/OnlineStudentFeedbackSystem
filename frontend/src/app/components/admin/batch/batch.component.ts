import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient
  ) { 
    this.getBatches();
  }

  id:any="";
  batches:any;
  searchText

  ngOnInit(): void {
    
  }

  getBatches() {
    return this.http.get('http://localhost:8000/api/showBatches').subscribe(res => {
      this.batches = res;
  });
  }
  
  add(){
    var form=new FormData();
    
    form.append("batch_no", $("#addInputBatchNumber").val());
    form.append("batch_name", $("#addInputBatchName").val());
    this.jarwis.addBatch(form).subscribe(res=>{
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getBatches();
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
     this.jarwis.deleteBatch(id).subscribe(res=>{
      var r:any=res;
        this.toastr.success(r.message);
        this.getBatches();
    }, error=>{
        error.error.error.forEach(el => {
            this.toastr.error(el,"Error");
        });
    })

  }
  update(id){
    var form=new FormData();
    form.append("id", this.id);
    form.append("batch_no", $("#updateInputBatchNumber").val());
    form.append("batch_name", $("#updateInputBatchName").val());

    this.jarwis.updateBatch(form).subscribe(res=>{
      
      var r:any=res;
      if(r.message){
        this.toastr.success(r.message),
        this.getBatches();
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
    this.batches.forEach(el => {
      if(id==el.id){
        this.id=el.id;
        $("#updateInputBatchNumber").prop("value", el.batch_no);
        $("#updateInputBatchName").prop("value", el.batch_name);
      } 
    });
  }
}
