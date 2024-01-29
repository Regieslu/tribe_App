import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  student: Student = {
    firstName: '',
    lastname: '',
    email: '',
    active: true
  }
  submitted = false;
  constructor(private studentService: StudentService) { }

  saveStudent(): void {
    const data = {
      firstName: this.student.firstName,
      lastname: this.student.lastname,
      email: this.student.email,
      active: this.student.active
    };

    this.studentService.createStudent(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = {
      firstName: '',
      lastname: '',
      email: '',
      active: true
    }
  }
}
