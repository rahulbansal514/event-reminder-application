import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private apiurl = "https://event-reminder-app.herokuapp.com/register";
  
  doRegister(user){
    return this.http.post(this.apiurl, user);
  }

}
