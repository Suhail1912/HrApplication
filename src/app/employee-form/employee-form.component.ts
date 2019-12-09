import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from '../HrService/http-client.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeDetails } from '../employee-details';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private httpclientService:HttpClientService,private activatedRoute:ActivatedRoute) { }
  public employeeId:string;
  public employeeDetails=new EmployeeDetails();
  @Input() public  PTIdStatus;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{this.employeeId=paramMap.get('ptid');});
    if(this.employeeId==null)
    {
      console.log("Employee Id = ",this.employeeDetails)
    }
    else{
      this.httpclientService.getEmployeeInfoBasedOnId(this.employeeId).subscribe(
        data=>{this.employeeDetails=data;}
    ,err=>{console.log(err,"ERROR")}
    );
}
      }
  formSubmit(){
    console.log("The content:====",this.employeeDetails);
    console.log("Em[;loyee Id ",this.employeeDetails.employeeId);
    if(typeof this.employeeDetails.employeeId === 'undefined'){
      this.httpclientService.insertEmployeeDetails(this.employeeDetails).subscribe(data=>
        {
          if(data.httpStatus=='OK')
          {
            alert("Successfully Details Inserted.");

          }
        });

    }
    else{
      this.httpclientService.updateEmployeeDetails(this.employeeDetails).subscribe(data=>{
        this.employeeDetails=data;
        alert("Succesfully Updated");
      },err=>{
        alert("Error at updating employee data");
      });
    }
    
  }
}
