import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbackresult',
  templateUrl: './feedbackresult.component.html',
  styleUrls: ['./feedbackresult.component.css']
})
export class FeedbackresultComponent implements OnInit {

  public loggedIn: boolean;
  
  constructor(
    private jarwis: JarwisService,
    private toastr: ToastrService,
    private http: HttpClient,
    private Auth: AuthService
  ) { 
    this.getFeedbacks();
  }

  id:any="";
  feedbacks:any;
  searchText

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  getFeedbacks() {
    return this.http.get('http://localhost:8000/api/showFeedbacks').subscribe(res => {
      this.feedbacks = res;
  });
  }
}
