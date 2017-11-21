import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from 'app/services/search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  constructor(private service: SearchHistoryService) { }

  ngOnInit() {
  }

}
