import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

       //Active and nin active content
       currentForm: string = 'profile';
  
       toggleForms(form: string) {
         this.currentForm = form;
       }

}
