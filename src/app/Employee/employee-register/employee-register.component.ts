import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  constructor(private router:Router) {
  }
  loginForm= new FormGroup({
    email: new FormControl('phumu98@gmail.com',Validators.compose([Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
    password: new FormControl('',  [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    confirm_password: new FormControl('',  [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),


  });
  get register (){return this.loginForm.controls;}

}
