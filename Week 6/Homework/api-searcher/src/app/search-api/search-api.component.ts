import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchHistoryService } from 'app/services/search-history.service';
import { GiphyService } from 'app/services/giphy.service';
import { WikipediaService } from 'app/services/wikipedia.service';

@Component({
  selector: 'app-search-api',
  templateUrl: './search-api.component.html',
  styleUrls: ['./search-api.component.css']
})
export class SearchApiComponent implements OnInit {
	gService: GiphyService;
	wService: WikipediaService;
	searchText: string;
	currentText: string;
		
  constructor(private service: SearchHistoryService, private http:Http) {
	this.gService = new GiphyService(this.http);
	this.wService = new WikipediaService(this.http);
  }

  ngOnInit() {
  }
  
  searchApi(): void
  {
	if(this.searchText.trim()) 
	{
		let timestamp = Date.now()
		this.currentText = this.searchText;
		this.service.addSearch(timestamp,this.currentText);
		this.gService.makeRequest(this.currentText);
		this.wService.makeRequest(this.currentText);
		this.searchText = "";
	}
  }
}
