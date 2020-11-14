import { Router } from '@angular/router';
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
    private Auth: AuthService,
    private router: Router,
  ) { 
    this.getFeedback();
    this.getStudents();
    this.getStaffs();
    this.getFeedsSended();
  }

  feedbacks:any;
  students:any;
  staffs:any;
  feedtokens:any;

  userDisplayName = '';
  userType = '';
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userType = sessionStorage.getItem('loggedUserType');
  }
  
  getFeedback() {
    return this.http.get('http://localhost:8000/api/showFeedbacks').subscribe(res => {
      this.feedbacks = res;
  });
  }

  getStudents() {
    return this.http.get('http://localhost:8000/api/showStudents').subscribe(res => {
      this.students = res;
  });
  }
  getFeedsSended() {
    return this.http.get('http://localhost:8000/api/showFeedbacksRequests').subscribe(res => {
      this.feedtokens = res;
  });
  } 

  getStaffs() {
    return this.http.get('http://localhost:8000/api/showStaffs').subscribe(res => {
      this.staffs = res;
  });
  } 
  

  public getRowsValue(flag) {
    if (flag === null) {
      return this.feedbacks.length;
    }
  }

  
  public getStudentRowsValue(flag) {
    if (flag === null) {
      return this.students.length;
    }
  }

 
  public getFeedTokensRowValues(flag) {
    if (flag === null) {
      return this.feedtokens.length;
    }
  }

  public getStaffsRowValues(flag) {
    if (flag === null) {
      return this.staffs.length;
    }
  }

  public getQues1Value1() {
      return this.feedbacks.filter(i => (i.ques1 == 'vgood')).length;
  }
  public getQues1Value2() {
    return this.feedbacks.filter(i => (i.ques1 == 'good')).length;
  }
  public getQues1Value3() {
    return this.feedbacks.filter(i => (i.ques1 == 'fair')).length;
  }
  public getQues1Value4() {
    return this.feedbacks.filter(i => (i.ques1 == 'poor')).length;
  }

  public getQues2Value1() {
    return this.feedbacks.filter(i => (i.ques2 == 'vgood')).length;
}
public getQues2Value2() {
  return this.feedbacks.filter(i => (i.ques2 == 'good')).length;
}
public getQues2Value3() {
  return this.feedbacks.filter(i => (i.ques2 == 'fair')).length;
}
public getQues2Value4() {
  return this.feedbacks.filter(i => (i.ques2 == 'poor')).length;
}

public getQues3Value1() {
  return this.feedbacks.filter(i => (i.ques3 == 'vgood')).length;
}
public getQues3Value2() {
return this.feedbacks.filter(i => (i.ques3 == 'good')).length;
}
public getQues3Value3() {
return this.feedbacks.filter(i => (i.ques3 == 'fair')).length;
}
public getQues3Value4() {
return this.feedbacks.filter(i => (i.ques3 == 'poor')).length;
}

public getQues4Value1() {
  return this.feedbacks.filter(i => (i.ques4 == 'vgood')).length;
}
public getQues4Value2() {
return this.feedbacks.filter(i => (i.ques4 == 'good')).length;
}
public getQues4Value3() {
return this.feedbacks.filter(i => (i.ques4 == 'fair')).length;
}
public getQues4Value4() {
return this.feedbacks.filter(i => (i.ques4 == 'poor')).length;
}

}