import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'vc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = '';
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchCourses(value: string) {
    this.searchEvent.emit(value);
  }
}
