import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };


  constructor(
    private Jarvis: JarwisService,
    private notify: ToastrService,
    private Notfiy:ToastrService
  ) { }

  ngOnInit() {
  }


  onSubmit() {
    this.Notfiy.info('Wait...' )
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(successResponse) {
    this.Notfiy.success(successResponse.data);
    this.form.email = null;
  }

}
