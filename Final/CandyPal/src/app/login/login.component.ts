import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from 'app/services/authentication.service';
import { AccountsService } from 'app/services/accounts.service';
import { Account } from 'app/models/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private aService: AuthenticationService, private actService: AccountsService) { 
	if(aService.authenticated)
	{
		this.router.navigate(['home']);
	}
  }

  ngOnInit() {
  }
	
	login(usr: HTMLInputElement, pwd: HTMLInputElement): void {
		if(this.actService.matchingCredentials(usr.value, pwd.value))
		{
			let account = this.actService.getAccount(usr.value);
			this.aService.account = account;
			this.aService.authenticated = true;
			this.router.navigate(['home']);
		}
		else
		{
			alert("Invalid Credentials");
		}
	}
}
