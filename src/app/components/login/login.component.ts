import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginData: any =
		{
			emailId: 'rahulbansal514@gmail.com',
			password: 'password'
		}

	constructor(
		public route: Router
	) { }

	ngOnInit() {
		console.log(this.route)
	}
	user = {
		emailId: '',
		password: '',
	}
	ngSubmit(data) {
		console.log(data);
		if ((this.loginData.emailId == data.useremailId) && (this.loginData.password == data.userpassword)) {
			console.log('data match success');
			this.route.navigateByUrl('/dashboard');
		}
	}
}
