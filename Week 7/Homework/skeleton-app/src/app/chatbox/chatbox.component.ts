import { Component, OnInit } from '@angular/core';
import { Message } from 'app/models/message.model';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
	messages: Message[];

  constructor() { 
	this.messages = [
		new Message(
			new User("Greg","https://media.giphy.com/media/z4PeFGnZCUpoc/giphy.gif"),
			"How's everyone doing?"
		),
		new Message(
			new User("Tod","https://media.giphy.com/media/MXmmtWqGYRaLu/giphy.gif"),
			"Hey Greg, I'm doing great!"
		),
		new Message(
			new User("Frank","https://media.giphy.com/media/I75I56Qz6TdqU/giphy.gif"),
			"When is the next update for this site?"
		),
		new Message(
			new User("Matt","https://media.giphy.com/media/rzKSHEMN0lVkc/giphy.gif"),
			"Never."
		),
		new Message(
			new User("Chris","https://media.giphy.com/media/IdVBwgiNjciiI/giphy.gif"),
			"I love these GIF avatars!"
		),
		new Message(
			new User("Fred","https://media.giphy.com/media/drOuwrDKAPFOo/giphy.gif"),
			"My avatar really shows who I am."
		)
	]
  }

  ngOnInit() {
  }

}
