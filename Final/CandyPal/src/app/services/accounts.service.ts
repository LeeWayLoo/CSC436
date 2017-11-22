import { Injectable } from '@angular/core';
import { Account } from 'app/models/account.model';

@Injectable()
export class AccountsService {
	accounts: Account[];

  constructor() { 
	this.accounts = [
		new Account("Roger","RogerPassword","roger@gmail.com","https://media.giphy.com/media/z4PeFGnZCUpoc/giphy.gif",124),
		new Account("Greg","GregPassword","greg@gmail.com","https://media.giphy.com/media/MXmmtWqGYRaLu/giphy.gif",136),
		new Account("Phillip","PhillipPassword","phillip@gmail.com","https://media.giphy.com/media/I75I56Qz6TdqU/giphy.gif",84),
		new Account("Louis","LouisPassword","louis@gmail.com","https://media.giphy.com/media/rzKSHEMN0lVkc/giphy.gif",295),
		new Account("Sarah","SarahPassword","sarah@gmail.com","https://media.giphy.com/media/IdVBwgiNjciiI/giphy.gif",153),
		new Account("Megan","MeganPassword","megan@gmail.com","https://media.giphy.com/media/drOuwrDKAPFOo/giphy.gif",41)
	]
  }

  accountExists(usr: String): boolean {
	  for (let account of this.accounts) {
		  if(usr == account.usr)
		  {
			  return true;
		  }
	  }
	  return false;
  }
  
  matchingCredentials(usr: String, pwd: String): boolean {
	  for (let account of this.accounts) {
		  if(usr == account.usr && pwd == account.pwd)
		  {
			  return true;
		  }
	  }
	  return false;
  }
  
  getAccount(usr: String): Account {
	  for (let account of this.accounts) {
		  if(usr == account.usr)
		  {
			  return account;
		  }
	  }
  }
  
  sortAccounts(): Account[] {
	  this.accounts.sort((a, b) => a.candy > b.candy ? -1 : a.candy < b.candy ? 1 : 0)
	  return this.accounts;
  }
}
