import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStudentComponent } from './registration-student.component';

describe('RegistrationStudentComponent', () => {
  let component: RegistrationStudentComponent;
  let fixture: ComponentFixture<RegistrationStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
