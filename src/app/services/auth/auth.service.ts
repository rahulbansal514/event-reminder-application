import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private apiurl = "https://event-reminder-app.herokuapp.com/login";
  
  doLogin(user){
    return this.http.post(this.apiurl, user);
  }
}
