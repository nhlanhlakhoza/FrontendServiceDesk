import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  profileForm: FormGroup = new FormGroup({
  fullName: new FormControl('Phumudzo Tshivhase', [Validators.required, this.noNumbersValidator()]),
  email: new FormControl('Phumu98@gmail.com', [Validators.required, Validators.email]),
  password: new FormControl('12345678', Validators.required),
  dob: new FormControl('22/10/2005', Validators.required),
  country: new FormControl('South Sudan', Validators.required),
  })

   //Active and nin active content
   currentForm: string = 'form1';

   toggleForms(form: string) {
     this.currentForm = form;
   }

   //Validating if the Full Name contains numbers

   noNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const fullNameRegex = /^[a-zA-Z\s]*$/;
  
      if (control.value && !fullNameRegex.test(control.value)) {
        return { containsNumbers: true };
      }
      return null;
    };
  }

   

  get profile (){return this.profileForm.controls;}


}
