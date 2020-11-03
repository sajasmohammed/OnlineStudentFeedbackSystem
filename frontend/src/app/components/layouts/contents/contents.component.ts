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