import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.css']
})
export class AddCourseButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Add course button was clicked');
    this.router.navigate(['courses/new']);
  }
}
