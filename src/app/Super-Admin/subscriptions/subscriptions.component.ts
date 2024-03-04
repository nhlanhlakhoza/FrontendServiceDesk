import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {

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

     
}
