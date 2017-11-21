import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class WikipediaService {
	url: String;
	key: String
	http: Http;
	results: String[];
	
  constructor(http: Http) { 
	this.url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*";
	this.http = http;
  }
  
  makeRequest(text: string): void {
	this.results = Array();
	this.http.request(this.url + "&search=" + text)
	.subscribe((res: Response) => {
		this.results = res.json()[1];
	});
  }
  
  getResults(): String[] {
	return this.results;
  }
}