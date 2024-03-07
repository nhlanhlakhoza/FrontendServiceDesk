import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent {
  constructor(private fb: FormBuilder) {}

  
//Change profile details form
  profileForm: FormGroup = new FormGroup({
    fullName: new FormControl('Phumudzo Tshivhase', [Validators.required, this.noNumbersValidator()]),
    email: new FormControl('Phumu98@gmail.com', [Validators.required, Validators.email]),
    dob: new FormControl('22/10/2005', Validators.required),
    country: new FormControl('South Sudan', Validators.required),
    });

    
  //Change Password Form

  passwordForm: FormGroup = this.fb.group({
    old_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    confirm_password: ['', [Validators.required]],
  }, { validators: this.MustMatch('new_password', 'confirm_password') });
  
//Adding a User form
  add_user_form: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required, this.noNumbersValidator()]),
    designation: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_number: new FormControl('',[Validators.required, Validators.maxLength(10), this.onlyAcceptNumber()]),
    status: new FormControl('', Validators.required),

    });

  //comfirm password
  MustMatch( password:any, confirm_password:any)
  {
   return(formGroup: FormGroup)=>{
     const passwordcontrol = formGroup.controls[password];
     const confirm_passwordcontrol = formGroup.controls[confirm_password];

     if(confirm_passwordcontrol.errors && !confirm_passwordcontrol.errors['MustMatch']){
       return;
     }
     if(passwordcontrol.value !== confirm_passwordcontrol.value)
     {
       confirm_passwordcontrol.setErrors({'MustMatch': true});
     }
     else{
       confirm_passwordcontrol.setErrors(null);
     }

   }
  }

     //Active and nin active content
     currentForm: string = 'form1';
  
     toggleForms(form: string) {
       this.currentForm = form;
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
    get password (){return this.passwordForm.controls;}
    get add (){return this.add_user_form.controls;}



}

