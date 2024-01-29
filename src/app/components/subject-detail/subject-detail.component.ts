import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent {

  subject: Subject = new Subject;

  constructor(private subjectService: SubjectService, private route: ActivatedRoute, private router: Router) { }

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

  deactivateSubject(): void {
    this.subjectService.updateSubject(this.route.snapshot.params['id'], {
      name: this.subject.name,
      code: this.subject.code,
      active: false
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/subjects']);
      },
      error: (e) => console.error(e)
    });
  }

}
