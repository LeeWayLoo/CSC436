import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
	@Input() button1: string;
	@Input() button2: string;
	
  constructor() { }

  ngOnInit() {
  }

}
