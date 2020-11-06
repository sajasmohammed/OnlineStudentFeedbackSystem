import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-feedrequests',
  templateUrl: './feedrequests.component.html',
  styleUrls: ['./feedrequests.component.css']
})
export class FeedrequestsComponent implements OnInit {

  public loggedIn: boolean;

constructor(
  private http: HttpClient,
  private Auth: AuthService,
  private toastr: ToastrService,
) { 
  this.getFeedRequests();
}

id:any="";
feedrequests:any;
tokens:any;
searchText;
p:number=1;

ngOnInit(): void {
  this.Auth.authStatus.subscribe(value => this.loggedIn = value);
}

  getFeedRequests() {
    return this.http.get('http://localhost:8000/api/showFeedbacksRequests').subscribe(res => {
      this.feedrequests = res;
  });
  }

  removeToken() {
    return this.http.delete('http://localhost:8000/api/removeToken').subscribe(res => {
      this.tokens = res;
      location.reload();
  });
  }

  clickTokenBtn(){
    this.removeToken();
    this.toastr.success('Token Removed');
  }

}