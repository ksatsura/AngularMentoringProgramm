import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogoffClick() {
    console.log('Logoff was clicked');
  }
}
