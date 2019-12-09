import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HomeComponent } from './home/home.component';
import { HrSignUpComponent } from './hr-sign-up/hr-sign-up.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'login',component:HrLoginComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:HrSignUpComponent},
  {path:'edit-employee/:ptid',component:EmployeeFormComponent},
  {path:'addemployee',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
