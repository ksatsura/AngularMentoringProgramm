import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../login-modal/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogoffClick() {
    this.authService.logOff();
    this.router.navigate(['login']);
  }
}
