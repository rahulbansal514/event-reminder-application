import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	
	constructor() { 
	
	}
	
	ngOnInit() {
	}
	user = {
		firstName: '',
		lastName: '',
		emailId: '',
		mobileNo: '',
		password: '',
	}
 	ngSubmit(registerData){
		//debugger
		console.log(registerData);
		// console.log(e);	
		// console.log(e.controls['userfirstname'].status);	
		// console.log(e.value.userfirstname);	
		// console.log(this.user.fname);	
	}
}
