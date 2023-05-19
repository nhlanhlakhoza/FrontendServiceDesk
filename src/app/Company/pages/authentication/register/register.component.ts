import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Alert } from 'src/app/utility/alert/alert';
import { pwdvalidation } from 'src/app/utility/authValidation/validation';
import { Account } from 'src/app/utility/models/models';
import { Email } from 'src/app/utility/models/models';
import { AuthenticationService } from 'src/app/utility/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formGroup: FormGroup;
  acc: Account =new Account();
  message!:any;
  constructor(private formBuilder: FormBuilder, private alert: Alert, private router: Router, private authservice: AuthenticationService,
    private spinner:NgxSpinnerService) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      confirm_password:new FormControl('',Validators.compose([Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]))
    }, {validators:pwdvalidation.pwdMatchValidator('password','confirm_password')});
  }
  /*Registerform= new FormGroup({
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
    confirm_password:new FormControl('',Validators.compose([Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]))
 }, {validators:pwdvalidation.pwdMatchValidator('password','confirm_password')}
  );*/
  ngOnInit(): void {
  }
  get v () {
    return this.formGroup.controls;
  }
  Register():void{
    this.spinner.show();
    this.acc=Object.assign(this.acc,this.formGroup.value);
    this.authservice.register(this.acc).subscribe(
      res=>{
        if(res){
          this.spinner.hide()
        }
        this.message=res;
        Swal.fire({position: 'center',icon: 'success',
        title:'Your Account has been Created Succefully',
        text: this.message.message,showConfirmButton: false,timer: 5000});
        sessionStorage.setItem('Email',this.acc.email);
        this.router.navigateByUrl('/ ');
      },error=>{
        console.log(error)
        if(error){
          this.spinner.hide()
        }
        if(error.status!==0) {
          Swal.fire({position: 'center',icon: 'error',title:'Failed',
          text: error.error,showConfirmButton: false,timer: 5000});
        }
        else {
          this.alert.Toast.fire({icon:'error',title:'Service Unavailable'})
        }
      }
    )
  }
}
