import { Injectable } from '@angular/core';
import { PyramidRow } from 'app/shared/pyramidrow.model';
import { Animal } from 'app/shared/animal.model';

@Injectable()
export class PyramidRowService 
{
	pyramidrows: PyramidRow[];
	
	constructor(animals: Animal[])
	{
		let colors = ["white","red","orange","yellow","blue","green","purple","pink"];
		let levels = new Array();
		for (let animal of animals)
		{
			let level = animal.level;
			if (levels.indexOf(level) == -1)
			{
				levels.push(level)
			}
			levels.sort()
		}
		let tmpPyramidrows = new Array<PyramidRow>();
		for (let level of levels)
		{
			let tmpAnimals = new Array<Animal>();
			for (let animal of animals)
			{
				if (level == animal.level)
				{
					tmpAnimals.push(animal);
				}
			}
			tmpPyramidrows.push(new PyramidRow(level,colors[level],tmpAnimals));
		}
		this.pyramidrows = tmpPyramidrows;
	}
}