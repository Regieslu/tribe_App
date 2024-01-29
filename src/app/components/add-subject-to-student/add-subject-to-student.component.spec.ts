import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectToStudentComponent } from './add-subject-to-student.component';

describe('AddSubjectToStudentComponent', () => {
  let component: AddSubjectToStudentComponent;
  let fixture: ComponentFixture<AddSubjectToStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubjectToStudentComponent]
    });
    fixture = TestBed.createComponent(AddSubjectToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
