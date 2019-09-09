import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlleventsService {

  private finaldata = [];
   private apiurl = "https://event-reminder-app.herokuapp.com/allEvents";
   constructor(private http: HttpClient) { }
   getData() {
      return this.http.get(this.apiurl);
   }

}
