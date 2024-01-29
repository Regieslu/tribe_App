import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  student: Student = new Student;

  submitted = false;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveStudent(this.route.snapshot.params['id']);
  }

  retrieveStudent(id: string): void {
    this.studentService.getStudentById(id)
      .subscribe({
        next: (data) => {
          this.student = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateStudent(): void {
    const data = {
      firstName: this.student.firstName,
      lastname: this.student.lastname,
      email: this.student.email,
      active: this.student.active
    };

    this.studentService.updateStudent(this.route.snapshot.params['id'], data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
