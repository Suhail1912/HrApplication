import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginModel } from '../login-model';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../employee-details';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient:HttpClient) { }


  getEmployeeInfoBasedOnId(employeeId: string) {
    const httpheader = {
      headers: new HttpHeaders({
       'Authorization': "Bearer " + sessionStorage.getItem('AuthToken')
      })
    };
    const httpParam={
      params: new HttpParams(
        {
          
        }
      )
    };
    return this.httpClient.get<EmployeeDetails>("http://localhost:8082/employee/getEmployee/"+employeeId,httpheader);
  }



  hrSignUp(hrForm: import("@angular/forms").FormGroup):Observable<any> {

    return this.httpClient.post<any>("http://localhost:8082/hr/signup",hrForm.value);
    
  }

 

  loginRequest(loginModel:LoginModel): Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8082/hr/auth/signin",loginModel);
  }

  getAllEmployees():Observable<EmployeeDetails[]>
  {
    const httpOptions = {
      headers: new HttpHeaders({
       'Authorization': "Bearer " + sessionStorage.getItem('AuthToken')
      }),
      
    };
    return this.httpClient.get<EmployeeDetails[]>("http://localhost:8082/employee/list",httpOptions);
  }

  updateEmployeeDetails(employeeDetails: EmployeeDetails):Observable<EmployeeDetails> {
    let httpOptions = {
      headers: new HttpHeaders({
       'Authorization': "Bearer " + sessionStorage.getItem('AuthToken')
      })
    };
    return this.httpClient.put<EmployeeDetails>("http://localhost:8082/employee/update/"+employeeDetails.employeeId,employeeDetails,httpOptions);
  }

  deleteByEmployeeId(employeeId: string):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
       'Authorization': "Bearer " + sessionStorage.getItem('AuthToken')
      })
    };
    return this.httpClient.delete<any>("http://localhost:8082/employee/delete/"+employeeId,httpOptions);
  }

  insertEmployeeDetails(employeeDetails: EmployeeDetails):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
       'Authorization': "Bearer " + sessionStorage.getItem('AuthToken')
      })
    };
      return this.httpClient.post<any>("http://localhost:8082/employee/insert",employeeDetails,httpOptions);
    };
}
