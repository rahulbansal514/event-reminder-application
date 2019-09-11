import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = {
		firstName: '',
		lastName: '',
		emailId: '',
		mobileNo: '',
	}
 	ngSubmit(userProfileData){
		//debugger
		console.log(userProfileData);
		// console.log(e);	
		// console.log(e.controls['userfirstname'].status);	
		// console.log(e.value.userfirstname);	
		// console.log(this.user.fname);	
		
		

	}

}
