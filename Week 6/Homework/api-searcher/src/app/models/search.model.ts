export class Search
{
	timestamp: number;
	text: string;
	
	constructor(timestamp:number, text:string) 
	{
		this.timestamp = timestamp;
		this.text = text;
	}
}