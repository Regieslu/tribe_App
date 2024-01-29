import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { Subject } from '../models/subject.model';

const baseUrl = 'http://localhost:8080';
const baseStudentUrl = '/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  getAllStudents(): Observable<Student[]> {// se ejecuta la llamada de tipo get al backend
    return this.http.get<Student[]>(`${baseUrl}${baseStudentUrl}`);
  }
  createStudent(data: any): Observable<any> {
    return this.http.post(`${baseUrl}${baseStudentUrl}`, data);
  }
  getStudentById(id: any): Observable<Student> {
    return this.http.get<Student>(`${baseUrl}${baseStudentUrl}/${id}`);
  }
  updateStudent(id: any, data: Student): Observable<Student>{
    return this.http.put<Student>(`${baseUrl}${baseStudentUrl}/${id}`, data)
  }
  getSubjectsById(id: any): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${baseUrl}${baseStudentUrl}/${id}/subjects`);
  }
  addSubjectToStudent(id: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}${baseStudentUrl}/${id}/subjects`, data);
  }
}
