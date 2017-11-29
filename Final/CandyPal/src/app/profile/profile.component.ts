import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from 'app/services/authentication.service';
import { AccountsService } from 'app/services/accounts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private aService: AuthenticationService, private actService: AccountsService) { 
	if(!aService.authenticated)
	{
		this.router.navigate(['home']);
	}
  }

  ngOnInit() {
  }

	updateAccount(usr: HTMLInputElement, pwd: HTMLInputElement, email: HTMLInputElement, profile: HTMLInputElement): void {
		if(this.actService.accountExists(usr.value))
		{
			alert("Username Already Taken");
		}
		else
		{
			this.aService.account.usr = usr.value;
			this.aService.account.pwd = pwd.value;
			this.aService.account.email = email.value;
			this.aService.account.profile = profile.value;
			alert("Profile Updated");
		}
	}
}
