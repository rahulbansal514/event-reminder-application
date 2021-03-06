import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewEventsFormComponent } from './components/dashboard/new-events-form/new-events-form.component';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';


const routes: Routes = [
	{path:"", component:HomeComponent},
	{path:"login", component:LoginComponent}, 
	{path:"register", component:RegisterComponent},
	{path:"forgot-password", component:ForgotPasswordComponent},
	{path:"dashboard", component:DashboardComponent},
	{path:"new-events-form", component:NewEventsFormComponent},
	{path:"user-profile", component:UserProfileComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 