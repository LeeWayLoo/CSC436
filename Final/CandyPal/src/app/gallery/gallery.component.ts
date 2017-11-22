import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'app/services/authentication.service';
import { GiphyService } from 'app/services/giphy.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	gService: GiphyService;

  constructor(private router: Router, private aService: AuthenticationService, private http:Http) { 
	if(!aService.authenticated)
	{
		this.router.navigate(['home']);
	}
	else
	{
		this.gService = new GiphyService(this.http);
		this.gService.makeRequest();
	}
  }

  ngOnInit() {
  }
}
