import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbackresult',
  templateUrl: './feedbackresult.component.html',
  styleUrls: ['./feedbackresult.component.css']
})
export class FeedbackresultComponent implements OnInit {

  public loggedIn: boolean;
  
  constructor(
    private http: HttpClient,
    private Auth: AuthService
  ) { 
    this.getFeedbacks();

  }
  id:any="";
  feedbacks:any;
  searchText;
  p:number=1;

  userType='';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  getFeedbacks() {
    return this.http.get('http://localhost:8000/api/showFeedbacks').subscribe(res => {
      this.feedbacks = res;
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
