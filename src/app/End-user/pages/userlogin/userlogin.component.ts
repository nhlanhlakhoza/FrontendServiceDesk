import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  constructor(){
  }
  loginForm= new FormGroup({
    email: new FormControl('',Validators.compose([Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });
  get v () {
    return this.loginForm.controls;
  }
  ngOnInit(): void {
  }
}
