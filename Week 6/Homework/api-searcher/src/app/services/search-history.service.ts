import { Injectable } from '@angular/core';
import { Search } from 'app/models/search.model';

@Injectable()
export class SearchHistoryService {
	history: Search[];
	
  constructor() { 
	this.history = [];
  }

  addSearch(timestamp: number, text: string) {
	this.history.push(new Search(timestamp,text));
  }
  
  getHistory() {
	return this.history;
  }
}
