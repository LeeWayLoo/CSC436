import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from 'app/services/authentication.service';
import { AccountsService } from 'app/services/accounts.service';
import { Account } from 'app/models/account.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(private router: Router, private aService: AuthenticationService, private actService: AccountsService) { 
	if(!aService.authenticated)
	{
		this.router.navigate(['home']);
	}
  }

  ngOnInit() {
  }

}
