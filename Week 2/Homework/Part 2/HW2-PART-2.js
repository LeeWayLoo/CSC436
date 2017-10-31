class Set
{	
	constructor()
	{
		this.set = new Array();
	}
	
	add(item)
	{
		if(typeof item === "string" || typeof item === "number")
		{
			var index = this.set.indexOf(item);
			if(index === -1)
			{
				this.set.push(item)
			}
			else
			{
				console.log("Element Already Exists");
			}
		}
		else
		{
			console.log("Incorrect Element Type");
		}
	}
	
	remove(item)
	{
		if(typeof item === "string" || typeof item === "number")
		{
			var index = this.set.indexOf(item);
			if(index > -1)
			{
				this.set.splice(index,1);
			}
			else
			{
				console.log("Element Doesn't Exist");
			}
		}
		else
		{
			console.log("Incorrect Element Type");
		}
	}
	
	toString()
	{
		return "{ "+this.set.toString()+" }"; 
	}
}