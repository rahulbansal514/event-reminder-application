import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-events-form',
  templateUrl: './new-events-form.component.html',
  styleUrls: ['./new-events-form.component.scss']
})
export class NewEventsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    eventType: '',
    eventName: '',
		eventDate: '',
	}
 	ngSubmit(addEventData){
		console.log(addEventData);
	}
}
