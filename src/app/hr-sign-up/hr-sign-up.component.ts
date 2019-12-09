import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../HrService/http-client.service';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { confirmPasswordValidator, identityRevealedValidator } from '../signup-validation';


@Component({
  selector: 'app-hr-sign-up',
  templateUrl: './hr-sign-up.component.html',
  styleUrls: ['./hr-sign-up.component.css']
})
export class HrSignUpComponent implements OnInit {

  constructor(private httpClientService:HttpClientService,private fb: FormBuilder) { }
  signUpResponse:any
  userNameStatus:boolean=false
  ngOnInit() {
  }

  hrForm=new FormGroup(
    {name:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]*"),Validators.minLength(3)]),
      username:new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})")]),
      confirmPassword:new FormControl('',[Validators.required])
    }, {validators : identityRevealedValidator}
  );


  hrFormSubmit()
  {

    console.log(this.hrForm);
    this.hrForm.controls
    this.httpClientService.hrSignUp(this.hrForm).subscribe(data =>
      {
        this.signUpResponse=data;
        if(this.signUpResponse.httpStatus=='OK')
        {
          this.userNameStatus=false;
          alert("Successfully registered");
          this.hrForm.reset();
        }
      

       },err =>
      {
        this.signUpResponse=err.error
          console.log(err,"ERROR")
        if(this.signUpResponse.httpStatus=='UNPROCESSABLE_ENTITY' && this.signUpResponse.message=='Username already exist')
        {
          alert("UserName already exist, Please modify")
          this.userNameStatus=true;
          console.log(this.userNameStatus,"username status")
          this.hrForm.get("username").reset()
        }
      });
   }

}
