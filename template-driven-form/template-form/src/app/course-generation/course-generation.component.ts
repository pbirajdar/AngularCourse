import { Component} from '@angular/core';

@Component({
  selector: 'course-generation',
  templateUrl: './course-generation.component.html',
  styleUrls: ['./course-generation.component.css']
})
export class CourseGenerationComponent {
  courseCategories = [
    {id:1, name:'Software Development'},
    {id:2, name:'Web Development'}
  ];

  submit(formData) {
    console.log(formData);
  }
}
