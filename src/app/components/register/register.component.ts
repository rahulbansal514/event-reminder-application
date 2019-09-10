import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	
	constructor(public route: Router, public registerService: RegisterService) {}
	
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
		//console.log(registerData);
		// console.log(e);	
		// console.log(e.controls['userfirstname'].status);	
		// console.log(e.value.userfirstname);	
		// console.log(this.user.fname);	
		
		this.registerService.doRegister(registerData).subscribe((response:any) =>{
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
