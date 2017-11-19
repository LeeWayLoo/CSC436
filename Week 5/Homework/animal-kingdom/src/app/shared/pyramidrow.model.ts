import { Animal } from 'app/shared/animal.model';

export class PyramidRow 
{
	level: number;
	color: string;
	animals: Animal[];
	
	constructor(level: number, color: string, animals: Animal[]) 
	{
		this.level = level;
		this.color = color;
		this.animals = animals;
	}
}