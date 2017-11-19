import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'app/shared/animal.model';

@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
	@Input() animals: Animal[];

  constructor() { }

  ngOnInit() {
  }

}
