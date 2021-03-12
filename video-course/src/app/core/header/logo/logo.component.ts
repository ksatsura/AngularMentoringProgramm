import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogoClick() {
    console.log('Logo was clicked');
  }

}
