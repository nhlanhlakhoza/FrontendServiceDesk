import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Alert } from 'src/app/utility/alert/alert';
import { Login } from 'src/app/utility/models/models';
import { StorageService } from 'src/app/utility/services/Storage/storage.service';
import { AuthenticationService } from 'src/app/utility/services/authentication.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  constructor(private spinner:NgxSpinnerService,private authservice: AuthenticationService,private alert: Alert, private router: Router,private strgeservice:StorageService){}
  
  login = new Login();
  isLoggedIn:boolean=false;
  token!:any;
  email!:any;
  tokenFromStorage!:any;
  ngOnInit(): void {
  }
  
  loginForm= new FormGroup({
    email: new FormControl('',Validators.compose([Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });
  get v () {
    return this.loginForm.controls;
  }
  Login():void{
    this.spinner.show()
    this.login=Object.assign(this.login,this.loginForm.value)
    this.authservice.login(this.login).subscribe(
      data => {
        if(data){this.spinner.hide()}
        this.token=data;
        this.strgeservice.saveUser(this.token.message);
        this.isLoggedIn=true;
        this.tokenFromStorage = sessionStorage.getItem("auth-user");
        this.email = jwt_decode(this.tokenFromStorage);
    
        this.router.navigateByUrl("/");
      }
    )
  }
}
