import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../HrService/http-client.service';
import { EmployeeDetails } from '../employee-details';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {


 

  constructor(private httpClientService:HttpClientService,private router:Router,private activatedRoute:ActivatedRoute) { }
  employeeDetails:EmployeeDetails[];
  response:any;


  ngOnInit() {

    this.httpClientService.getAllEmployees().subscribe(data =>
      {
        this.employeeDetails=data;
       },err =>
      {
          console.log(err,"ERROR")
      });
  }

  edit(employeeId:string)
  {
    this.router.navigate(['/edit-employee',employeeId]); 
  }
  delete(employeeId:string){
    this.httpClientService.deleteByEmployeeId(employeeId).subscribe(data=>{
      console.log(data,"base info");
      if(data.httpStatus=='OK')
      {
        alert("The employee with "+employeeId+" Successfully removed");
        //for refreshing the page after deleting the empoloyee
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/home']);
      }
      else{
        alert("Server issue, please try later");
      }
      
    },err=>{
      alert("Error in removing,please try later");
    })
  }

  previous(){

  }

  next(){
    
  }
}
