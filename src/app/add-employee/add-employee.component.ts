import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../employee-details';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public PTID:boolean=true;
  constructor() { }
  ngOnInit() {
  }

 

}
