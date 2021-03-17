import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  searchParam = '';

  constructor() { }

  ngOnInit(): void {
  }

  setSearchParam(param: string): void {
    this.searchParam = param;
  }
}
