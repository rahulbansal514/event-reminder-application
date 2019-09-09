import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	constructor(public route: Router, public authService: AuthService) {}

	ngOnInit() {
	}
	
	user = {
		emailId: '',
		password: '',
	}
	
	ngSubmit(data) {
		console.log(data);
		this.authService.doLogin(data).subscribe((response:any) =>{
			console.log(response);
			if(response.success){
				this.route.navigateByUrl('/dashboard');
			}
			else{
				console.log(response.message);
			}
		});
		
		
	}
}
