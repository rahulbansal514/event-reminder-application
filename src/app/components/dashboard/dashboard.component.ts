import { Component, OnInit } from '@angular/core';
import { AlleventsService } from '../../services/allevents/allevents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public UpcomingEvents = [];
  public email = 'rahulbansal514@gmail.com';  // for Post
   constructor(private myservice: AlleventsService) {}
   ngOnInit() {
      this.myservice.getData(this.email).subscribe((data:any) => {   // for post
     // this.myservice.getData().subscribe((data:any) => {   // for get
         //this.UpcomingEvents = Array.from(Object.keys(data), k=>data[k]);
         //console.log(this.UpcomingEvents[1]);
         console.log(data);
         if(data.success){
            this.UpcomingEvents = data.data;
         }else{
           console.log('Something went wrong');
         }
      });
   }
}
