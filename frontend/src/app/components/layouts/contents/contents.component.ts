import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private http: HttpClient,
  ) { 
    this.getFeedback();
   
  }

  feedbacks:any;

  ngOnInit(): void {
  }

  getFeedback() {
    return this.http.get('http://localhost:8000/api/showFeedbacks').subscribe(res => {
      this.feedbacks = res;
  });
  }

  

  public getRowsValue(flag) {
    if (flag === null) {
      return this.feedbacks.length;
    } else {
      return this.feedbacks.filter(i => (i.ques1 == flag)).length;
    }
  }

}