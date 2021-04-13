import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'vc-add-course-modal',
  templateUrl: './add-course-modal.component.html',
  styleUrls: ['./add-course-modal.component.css']
})
export class AddCourseModalComponent implements OnInit {
  public addForm: FormGroup;

  constructor(private router: Router, private courseService: CoursesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({ 
      title: '',
      description: '',
      creationDate: '',
      length: '',
    });
  }

  onCancelClick() {
    this.router.navigate(['']);
  }

  onSaveClick() {
    // TOGO:  API call
    const newCourseData = this.addForm.value;

    this.router.navigate(['']);
    this.courseService.createCourse(newCourseData);
  }
}
