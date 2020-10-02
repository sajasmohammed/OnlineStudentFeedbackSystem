import { Subject } from './../components/admin/subject';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class JarwisService {

  
  private baseUrl="http://localhost:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { 
  
  }


  signup(data){
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
  login(data){
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
  addSubject(form){
    return this.http.post(`${this.baseUrl}/addSubjects`, form);
  }
  deleteSubject(id){
    return this.http.post(`${this.baseUrl}/deleteSubjects?id=`+id, null);
  }
  // updateSubject(form){
  //   return this.http.post(`${this.baseUrl}/updateSubjects`, form);
  // }
  // showSubject(id){
  //   return this.http.get(`${this.baseUrl}/showSubjects`);
  // }
}
