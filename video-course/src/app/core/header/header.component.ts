import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../login-modal/authentication.service';
@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isDisplayLogin: boolean = false;
  public isUserAuthenticated: boolean = false;
  public userName: string = '';


  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.checkUserStatus();
  }

  checkUserStatus() {
    this.isUserAuthenticated = this.authService.isAuthenticated();

    if (this.isUserAuthenticated) {

      this.authService.getUserInfo()
        .then(user => {
          localStorage.setItem('userName', user.name.fisrt); this.userName = user.name.first
        })
    }
  }

  onLogoutClick() {

  }
}
