import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-fgt-password',
  templateUrl: './admin-fgt-password.component.html',
  styleUrls: ['./admin-fgt-password.component.css']
})
export class AdminFgtPasswordComponent {

  constructor(private router:Router) {
  }
  forgetForm= new FormGroup({
    email: new FormControl('',Validators.compose([Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
  });
  get forgot (){return this. forgetForm.controls;}
}
