import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {

  students?: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.studentService.getAllStudents()
      .subscribe({
        next: (data) => {
          this.students = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveStudents();
    this.students = [];
  }
}

