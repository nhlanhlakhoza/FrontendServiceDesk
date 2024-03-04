import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.css']
})
export class EditSubscriptionComponent {

  constructor(private router: Router){}

  editForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('Subscription Name',[Validators.required]),
    price: new FormControl('R 60',[Validators.required, this.onlyAcceptNumber()]),
    agents: new FormControl('5', [Validators.required, this.onlyAcceptNumber()]),
    customerLink: new FormControl('Yes',[Validators.required]),
    status: new FormControl('Active', [Validators.required])

  })

  get edit (){return this.editForm.controls;}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

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
