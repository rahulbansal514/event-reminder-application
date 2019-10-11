import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlleventsService {

  private finaldata = [];
   private apiurl = "https://event-reminder-app.herokuapp.com/allEvents";
   constructor(private http: HttpClient) { }

   // for get
  //  getData() {
  //     return this.http.get(this.apiurl);
  //  }

  // for post
   getData(email):Observable<any> {
      return this.http.post(this.apiurl,{emailId:email});
  }

}
