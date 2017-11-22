import { Injectable } from '@angular/core';
import { Account } from 'app/models/account.model';

@Injectable()
export class AuthenticationService {
	authenticated: boolean;
	account: Account;
	
  constructor() { 
	this.authenticated = false;
  }
}
