import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ListSubjectsComponent } from './components/list-subjects/list-subjects.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { AddSubjectsComponent } from './components/add-subjects/add-subjects.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';
import { UpdateSubjectComponent } from './components/update-subject/update-subject.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddSubjectToStudentComponent } from './components/add-subject-to-student/add-subject-to-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: ListStudentsComponent },
  { path: 'subjects', component: ListSubjectsComponent },
  { path: 'add-student', component: AddStudentsComponent },
  { path: 'add-subject', component: AddSubjectsComponent },
  { path: 'student/:id', component:  StudentDetailComponent},
  { path: 'subject/:id', component:  SubjectDetailComponent},
  { path: 'subject-update/:id', component: UpdateSubjectComponent},
  { path: 'student-update/:id', component: UpdateStudentComponent},
  { path: 'add-subject-to-student/:id', component: AddSubjectToStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
