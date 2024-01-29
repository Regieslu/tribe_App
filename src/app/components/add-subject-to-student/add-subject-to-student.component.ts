import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject-to-student',
  templateUrl: './add-subject-to-student.component.html',
  styleUrls: ['./add-subject-to-student.component.css']
})
export class AddSubjectToStudentComponent {

  subjects?: Subject[];

  data: any = {};

  selected: number = 0;

  submitted = false;

  constructor(private subjectService: SubjectService, private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveSubjects(this.route.snapshot.params['id']);
  }

  retrieveSubjects(id: any): void {
    this.subjectService.getAllSubjects()
      .subscribe({
        next: (data) => {
          this.subjects = data;
        },
        error: (e) => console.error(e)
      });
  }

  selectOption(event: any) {
    this.selected = event.target.value;
    this.data = {
      subjectId: this.selected
    }
  }

  saveSubject(): void {
    this.studentService.addSubjectToStudent(this.route.snapshot.params['id'], this.data)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.submitted = true;
          this.router.navigate([`/student/${this.route.snapshot.params['id']}`]);
        },
        error: (e) => console.error(e)
      });
  }
}
