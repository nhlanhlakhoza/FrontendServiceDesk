import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
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
      price: new FormControl('', [Validators.required, this.validateNumber.bind(this)]),
      agents: new FormControl('', [Validators.required, this.validateNumber.bind(this)])
    })

      //Toggling through the buttons
      currentForm: string = 'form1';

      toggleForms(form: string) {
        this.currentForm = form;
      }

      get add_subscriber (){return this.subscriptionForm.controls;}

      //Price and Agents validation

      validateNumber(control: AbstractControl): ValidationErrors | null {
        if (isNaN(control.value)) {
          return { 'notANumber': true };
        }
        return null;
      }
      

     
}
