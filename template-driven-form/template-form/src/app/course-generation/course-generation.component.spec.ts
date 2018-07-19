import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGenerationComponent } from './course-generation.component';

describe('CourseGenerationComponent', () => {
  let component: CourseGenerationComponent;
  let fixture: ComponentFixture<CourseGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
