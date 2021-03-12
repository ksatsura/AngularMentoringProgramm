import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-creation-date',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css']
})
export class CreationDateComponent implements OnInit {
  @Input() date;

  constructor() { }

  ngOnInit(): void {
  }

}
