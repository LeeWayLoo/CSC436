export class Account
{
	usr: String;
	pwd: String;
	email: String;
	profile: String;
	candy: Number;
	
	constructor(usr:String, pwd:String, email:String, profile?:String, candy?: Number) 
	{
		this.usr = usr;
		this.pwd = pwd;
		this.email = email;
		this.profile = profile || "http://www.freeiconspng.com/uploads/profile-icon-9.png";
		this.candy = candy || 100;
	}
}