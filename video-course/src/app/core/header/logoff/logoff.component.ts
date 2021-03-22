import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../login-modal/authentication.service';

@Component({
  selector: 'vc-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogoffClick() {
    this.authService.logOff();
  }
}
