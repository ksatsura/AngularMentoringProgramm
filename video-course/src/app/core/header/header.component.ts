import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDisplayLogin;

  constructor() { }

  ngOnInit(): void {

  }

  onLogoutClick() {

  }

}
