import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { Subject } from 'src/app/models/subject.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  subjects?: Subject[];

  student: Student = new Student;

  condition: boolean = false;


  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveStudent(this.route.snapshot.params['id']);
    this.retrieveSubjectsByStudent(this.route.snapshot.params['id']);
  }

  retrieveSubjectsByStudent(id: string) {
    this.studentService.getSubjectsById(id)
    .subscribe({
      next: (data) => {
        this.subjects = data;
        if(data && data.length) {
          this.condition = true;
        }
        console.log(data);
      },
      error: (e) => console.error(e)
    })
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

  deactivateStudent(): void {
    this.studentService.updateStudent(this.route.snapshot.params['id'], {
      firstName: this.student.firstName,
      lastname: this.student.lastname,
      email: this.student.email,
      active: false
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/students']);
      },
      error: (e) => console.error(e)
    });
  }

}
