import { AuthService } from './../../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

public loggedIn: boolean;

constructor(
  private http: HttpClient,
  private Auth: AuthService
) { 
  this.getHistories();
}

id:any="";
histories:any;
searchText;
p:number=1;

ngOnInit(): void {
  this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  
}

getHistories() {
  return this.http.get('http://localhost:8000/api/showHistory').subscribe(res => {
    this.histories = res;
});
}
}
