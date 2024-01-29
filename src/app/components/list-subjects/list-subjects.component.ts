import { Component } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css']
})
export class ListSubjectsComponent {
  subjects?: Subject[];
  

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.retrieveSubjects();
  }

  retrieveSubjects(): void {
    this.subjectService.getAllSubjects()
      .subscribe({
        next: (data) => {
          this.subjects = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveSubjects();
    this.subjects = [];
  }
}
