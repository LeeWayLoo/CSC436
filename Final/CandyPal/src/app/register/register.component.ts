import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from 'app/services/authentication.service';
import { AccountsService } from 'app/services/accounts.service';
import { Account } from 'app/models/account.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private aService: AuthenticationService, private actService: AccountsService) { 
	if(aService.authenticated)
	{
		this.router.navigate(['home']);
	}
  }

  ngOnInit() {
  }

  createAccount(usr: HTMLInputElement, pwd: HTMLInputElement, email: HTMLInputElement, profile: HTMLInputElement): void {
	  if(this.actService.accountExists(usr.value))
	  {
		  alert("Account Already Exists");
	  }
	  else
	  {
		  let account = new Account(usr.value,pwd.value,email.value,profile.value);
		  this.actService.accounts.push(account);
		  this.aService.account = account;
		  this.aService.authenticated = true;
		  this.router.navigate(['home']);
	  }
  }
}
