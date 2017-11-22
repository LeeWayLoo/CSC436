import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private aService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(): void {
	  this.aService.authenticated = false;
	  this.aService.account = null;
	  this.router.navigate(['home']);
  }
  
}
