import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course-model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'vc-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  public course: Course;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.params.id;
    this.course = this.coursesService.getItemById(Number(itemId));

    this.form = this.formBuilder.group({ 
      title: this.course.title,
      description: this.course.description,
      creationDate: this.course.creationDate,
      duration: this.course.duration
    });
  }

  onCancelClick() {
    this.router.navigate(['courses']);
  }

  onSaveClick() {
    const newCourseData = this.form.value;
    this.coursesService.updateItem(this.course.id, newCourseData);
    this.router.navigate(['courses']);
  }
}
