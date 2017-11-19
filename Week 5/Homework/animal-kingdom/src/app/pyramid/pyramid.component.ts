import { Component, OnInit, Input } from '@angular/core';
import { PyramidRow } from 'app/shared/pyramidrow.model';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
	@Input() pyramidrows: PyramidRow[];

  constructor() { }

  ngOnInit() {
  }

}
