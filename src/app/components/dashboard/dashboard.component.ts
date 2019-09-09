import { Component, OnInit } from '@angular/core';
import { AlleventsService } from '../../././././services/allevents/allevents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public UpcomingEvents = [];
   constructor(private myservice: AlleventsService) {}
   ngOnInit() {
      this.myservice.getData().subscribe((data) => {
         this.UpcomingEvents = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.UpcomingEvents);
      });
   }
  // UpcomingEvents = [
  //   {
  //    "id":"",
  //    "eventType":"Birthday",
  //    "eventName":"Rahul's Birthday",
  //    "eventDate":"12-Jul-2019",
  //    "name":"harsh",
  //    "description":"lorem ipsum",
  //    "eventCreatedBy":"abc@com",
  //   },
  //   {
  //    "id":"",
  //    "eventType":"Aniversary",
  //    "eventName":"Rahul's Anniversary",
  //    "eventDate":"12-Jul-2019",
  //    "name":"harsh",
  //    "description":"lorem ipsum",
  //    "eventCreatedBy":"abc@com",
  //   },
  //   {
  //    "id":"",
  //    "eventType":"One Time Event",
  //    "eventName":"5km walk event",
  //    "eventDate":"12-Jul-2019",
  //    "name":"harsh",
  //    "description":"lorem ipsum",
  //    "eventCreatedBy":"abc@com",
  //   }
  //   ];

}
