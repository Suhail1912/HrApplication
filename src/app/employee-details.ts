import { EmployeeAddressDetails } from './employee-address-details';
import { EmployeeOfficeDetails } from './employee-office-details';

export class EmployeeDetails {

    public employeeId:string;
    public firstName:string;
    public lastName:string;
    public emailId:string;
    public mobileNumber:number;
    public emergencyContactName:string;
    public emergencyContactNumber:string;
    public dateOfBirth:String;
    public bloodGroup:String;
    public employeeAddressDetails:EmployeeAddressDetails=new EmployeeAddressDetails();
    public employeeOfficeDetails:EmployeeOfficeDetails=new EmployeeOfficeDetails();
   
    constructor()
    {
        
    }
}
