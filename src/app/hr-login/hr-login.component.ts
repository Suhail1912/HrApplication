import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login-model';
import { HttpClientService } from '../HrService/http-client.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css']
})
export class HrLoginComponent implements OnInit {

  constructor(private httpClientService: HttpClientService, private router: Router,private tokenStorageService:TokenStorageService) { }

  ngOnInit() {
  }

  loginModel = new LoginModel();
  submitted = false;
  loginStatus=true;

  onSubmit() {

    this.submitted = true;
    console.log(this.loginModel)
    this.httpClientService.loginRequest(this.loginModel).subscribe(
      data => {
        this.loginStatus=true;
        console.log(data.accessToken)
        
        this.tokenStorageService.saveToken(data.accessToken);
        console.log("After adding it into tokenStore "+this.tokenStorageService.getToken());
        this.router.navigate(['/home']);
        
      }, err => {
        if (err.status === 401) {
          this.loginStatus=false;
          this.loginModel.usernameOrEmail=""
          this.loginModel.password=""
        }
      }
    );
  }


}

