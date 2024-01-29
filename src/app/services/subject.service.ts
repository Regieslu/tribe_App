import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject.model';

const baseUrl = 'http://localhost:8080';
const baseSubjectUrl = '/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  
  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${baseUrl}${baseSubjectUrl}`);
  }

  createSubject(data: Subject): Observable<Subject> {
    return this.http.post(`${baseUrl}${baseSubjectUrl}`, data);
  }

  getSubjectById(id: any): Observable<Subject> {
    return this.http.get<Subject>(`${baseUrl}${baseSubjectUrl}/${id}`);
  }

  updateSubject(id: any, data: Subject): Observable<Subject>{
    return this.http.put<Subject>(`${baseUrl}${baseSubjectUrl}/${id}`, data)
  }
  
}
