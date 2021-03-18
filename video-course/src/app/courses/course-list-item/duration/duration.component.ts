import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  @Input() courseDuration;

  constructor() { }

  ngOnInit(): void {
  }
}
