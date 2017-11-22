import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	button1: String = "Login";
	button2: String = "Forgot Password";

  constructor() { }

  ngOnInit() {
  }

}
