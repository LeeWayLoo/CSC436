import { Component } from '@angular/core';
import { PyramidRowService } from 'app/shared/pyramidrow.service';
import { Animal } from 'app/shared/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
	service: PyramidRowService;
	
	constructor() 
	{
		this.service = new PyramidRowService([
			new Animal(1,"Hawk","https://cdn.pixabay.com/photo/2017/08/07/13/52/hawk-2604036_960_720.png"),
			new Animal(1,"Owl","https://cdn.pixabay.com/photo/2017/01/26/11/17/european-eagle-owl-2010346_960_720.jpg"),
			new Animal(1,"Falcon","https://cdn.pixabay.com/photo/2017/10/31/21/39/falcon-2906587_960_720.jpg"),
			new Animal(2,"Snake","https://cdn.pixabay.com/photo/2017/11/13/11/00/snake-2945292_960_720.jpg"),
			new Animal(2,"Cat","https://cdn.pixabay.com/photo/2017/11/13/16/00/cat-2946028_960_720.jpg"),
			new Animal(2,"Fox","https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_960_720.jpg"),
			new Animal(3,"Frog","https://cdn.pixabay.com/photo/2017/04/07/21/49/frog-2211972_960_720.jpg"),
			new Animal(3,"Mouse","https://cdn.pixabay.com/photo/2016/03/05/18/54/animal-1238228_960_720.jpg"),
			new Animal(3,"Lizard","https://cdn.pixabay.com/photo/2017/01/19/16/31/sand-lizard-1992758_960_720.jpg"),
			new Animal(4,"Grasshopper","https://cdn.pixabay.com/photo/2014/03/04/16/07/grasshopper-279532_960_720.jpg"),
			new Animal(4,"Fly","https://cdn.pixabay.com/photo/2017/03/17/12/46/blowfly-2151453_960_720.jpg"),
			new Animal(4,"Ant","https://cdn.pixabay.com/photo/2014/12/11/19/19/ant-564617_960_720.jpg"),
			new Animal(5,"Grass","https://cdn.pixabay.com/photo/2017/11/12/23/39/grass-2944195_960_720.jpg"),
			new Animal(5,"Fruits","https://cdn.pixabay.com/photo/2013/02/17/12/24/fruits-82524_960_720.jpg"),
			new Animal(5,"Seeds","https://cdn.pixabay.com/photo/2017/04/28/00/47/seeds-2267092_960_720.jpg"),
		]);
	}
}