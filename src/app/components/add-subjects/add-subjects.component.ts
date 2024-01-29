import { Component } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrls: ['./add-subjects.component.css']
})
export class AddSubjectsComponent {

  subject: Subject = {
    name: '',
    code: 0,
    active: true,
  }
  submitted = false;
  constructor(private subjectService: SubjectService) { }
  saveSubject(): void {
    const data = {
      name: this.subject.name,
      code: this.subject.code,
      active: this.subject.active,
    };

    this.subjectService.createSubject(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newSubject(): void {
    this.submitted = false;
    this.subject = {
      name: '',
      code: 0,
      active: true
    }
  }
}
