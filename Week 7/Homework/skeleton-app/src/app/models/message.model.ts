import { User } from 'app/models/user.model';

export class Message
{
	user: User;
	msg: string;
	
	constructor(user: User, msg: string) 
	{
		this.user = user;
		this.msg = msg;
	}
}