import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isDisplayLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('isDisplayingLogin', this.isDisplayLogin);
  }

  onLogoutClick() {

  }

}
