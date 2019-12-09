import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HrSignUpComponent } from './hr-sign-up/hr-sign-up.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    HrLoginComponent,
    HomeComponent,
    HrSignUpComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
