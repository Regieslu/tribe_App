import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent {

  submitted = false;

  subject: Subject = new Subject;

  constructor(private subjectService: SubjectService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveSubject(this.route.snapshot.params['id']);
  }

  retrieveSubject(id: string): void {
    this.subjectService.getSubjectById(id)
      .subscribe({
        next: (data) => {
          this.subject = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateSubject(): void {
    const data = {
      name: this.subject.name,
      code: this.subject.code,
      active: this.subject.active,
    };

    this.subjectService.updateSubject(this.route.snapshot.params['id'], data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
