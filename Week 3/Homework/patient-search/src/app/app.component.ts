import { Component } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	patients: Patient[];
	searchText: string;
	searchType: string;
  
  constructor() {
	this.patients = [
		new Patient("John","Phillips","john.phillips@gmail.com","Asthma","Hersheys"),
		new Patient("Ben","Thomas","ben.thomas@gmail.com","Epilepsy","Reeses"),
		new Patient("Ken","Watson","ken.watson@gmail.com","Lupus","Skittles","https://cdn.pixabay.com/photo/2015/04/29/22/15/human-746190_960_720.jpg"),
		new Patient("Joe","Hudson","joe.hudson@gmail.com","Migraine","Pringles"),
		new Patient("Sarah","Phan","sarah.phan@gmail.com","Mono","Poptart","https://cdn.pixabay.com/photo/2017/10/29/22/27/portrait-2900972_960_720.jpg"),
		new Patient("Chris","McDonald","chris.mcdonald@gmail.com","Obesity","Cookie"),
		new Patient("Melissa","Hibbert","melissa.hibbert@gmail.com","Obesity","Fudge","https://cdn.pixabay.com/photo/2017/10/27/16/59/little-2894899_960_720.jpg"),
		new Patient("Samantha","Horn","samantha.horn@gmail.com","Stroke","Lemon","https://cdn.pixabay.com/photo/2017/10/26/06/04/model-2890203_960_720.jpg"),
		new Patient("Phil","Kasl","phil.kasl@gmail.com","Obesity","Cake","https://cdn.pixabay.com/photo/2014/11/21/12/13/man-540500_960_720.jpg"),
		new Patient("Tanya","Smith","tanya.smith@gmail.com","Diabetes","Pie","https://cdn.pixabay.com/photo/2017/10/26/01/04/woman-2889882_960_720.jpg"),
	];
	this.searchType = "firstName";
  }
  
  search(): Patient[] {
	var display: Patient[] = Array();
	if(!this.searchText) 
		return this.patients;
	for(let patient of this.patients) {
		if(patient[this.searchType].slice(0,this.searchText.length).toLowerCase() == this.searchText.toLowerCase())
			display.push(patient);
	}
	return display;
  }
}
