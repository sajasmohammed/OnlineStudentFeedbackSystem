import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class JarwisService {
   
  private baseUrl="http://localhost:8000/api";

  constructor(private http: HttpClient) { 
  }

  //Login Signup Form API 
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

  //Subject Module API
  addSubject(form){
    return this.http.post(`${this.baseUrl}/addSubjects`, form);
  }
  deleteSubject(id){
    return this.http.post(`${this.baseUrl}/deleteSubjects?id=`+id, null);
  }
  updateSubject(form){
    return this.http.post(`${this.baseUrl}/updateSubjects`, form);
  }

  //Course Module API
  addCourse(form){
    return this.http.post(`${this.baseUrl}/addCourses`, form);
  }
  deleteCourse(id){
    return this.http.post(`${this.baseUrl}/deleteCourses?id=`+id, null);
  }
  updateCourse(form){
    return this.http.post(`${this.baseUrl}/updateCourses`, form);
  }

  //Batch Module API
  addBatch(form){
    return this.http.post(`${this.baseUrl}/addBatches`, form);
  }
  deleteBatch(id){
    return this.http.post(`${this.baseUrl}/deleteBatches?id=`+id, null);
  }
  updateBatch(form){
    return this.http.post(`${this.baseUrl}/updateBatches`, form);
  }

  //Staffs Module API
  addStaff(form){
    return this.http.post(`${this.baseUrl}/addStaffs`, form);
  }
  deleteStaff(id){
    return this.http.post(`${this.baseUrl}/deleteStaffs?id=`+id, null);
  }
  updateStaff(form){
    return this.http.post(`${this.baseUrl}/updateStaffs`, form);
  }  

  //Student Module API
  addStudent(form){
    return this.http.post(`${this.baseUrl}/addStudents`, form);
  }
  deleteStudent(id){
    return this.http.post(`${this.baseUrl}/deleteStudents?id=`+id, null);
  }
  updateStudent(form){
    return this.http.post(`${this.baseUrl}/updateStudents`, form);
  }  

  //Send Feedback Form
  requestFeedbackFormLink(data) {
    return this.http.post(`${this.baseUrl}/requestFeedbackFormLink`, data);
  }
  responseFeedbackFormLink(data) {
    return this.http.post(`${this.baseUrl}/responseFeedbackFormLink`, data);
  }
  addFeedback(data) {
    return this.http.post(`${this.baseUrl}/addFeedbacks`, data);
  }
  

  //History API  
  addHistories(data) {
    return this.http.post(`${this.baseUrl}/addHistory`, data);
  }
  
}
