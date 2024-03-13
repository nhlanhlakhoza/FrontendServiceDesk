import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {


  constructor(private _snackBar: MatSnackBar) {}

     subscriptionForm:FormGroup = new FormGroup({
      id: new FormControl('0'),
      name: new FormControl('',[Validators.required]),
      expDate: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required,this.onlyAcceptNumber()]),
      agents: new FormControl('', [Validators.required, this.onlyAcceptNumber()])
     })

      //Toggling through the buttons
      currentForm: string = 'form1';

      toggleForms(form: string) {
        this.currentForm = form;
      }

      get add_subscriber (){return this.subscriptionForm.controls;}

//Validating Agents number

onlyAcceptNumber(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    if (isNaN(value)) {
      return { 'notANumber': { value: value } };
    }
    const mobileNumberRegex = /^[A-Z]{10}$/; // Change this regex based on your mobile number format
    const valid = mobileNumberRegex.test(value);
    return valid ? null : { 'invalidMobileNumber': { value: value } };
  };
}

/*Creatng an alert when the 'CANCEL' button is clicked

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000, // duration in milliseconds
  });
}

showAlert() {
  this.openSnackBar('Are you sure you want to Cancel' + this.subscriptionForm.controls(), 'Close');
}*/

     
}
