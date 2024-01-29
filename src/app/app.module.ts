import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ListSubjectsComponent } from './components/list-subjects/list-subjects.component';
import { AddSubjectsComponent } from './components/add-subjects/add-subjects.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { UpdateSubjectComponent } from './components/update-subject/update-subject.component';
import { AddSubjectToStudentComponent } from './components/add-subject-to-student/add-subject-to-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    ListSubjectsComponent,
    AddSubjectsComponent,
    AddStudentsComponent,
    StudentDetailComponent,
    SubjectDetailComponent,
    UpdateStudentComponent,
    UpdateSubjectComponent,
    AddSubjectToStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
