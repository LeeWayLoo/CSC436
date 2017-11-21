import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GiphyService {
	url: String;
	key: String
	http: Http;
	images: String[];
	
  constructor(http: Http) { 
	this.url = "https://api.giphy.com/v1/gifs/search?&limit=50";
	this.key = "M6idtJq6VjbbAaicFtKV9fskMLjSvBXF";
	this.http = http;
  }
  
  makeRequest(text: string): void {
	this.images = Array();
	this.http.request(this.url + "&api_key=" + this.key + "&q=" + text)
	.subscribe((res: Response) => {
		for(let item of res.json().data)
		{
			this.images.push(item.images.fixed_width_small.url);
		}
	});
  }
  
  getImages(): String[] {
	return this.images;
  }
}