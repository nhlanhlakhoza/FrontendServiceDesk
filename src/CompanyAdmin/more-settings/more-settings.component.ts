import { Component } from '@angular/core';

@Component({
  selector: 'app-more-settings',
  templateUrl: './more-settings.component.html',
  styleUrls: ['./more-settings.component.css']
})
export class MoreSettingsComponent {



     //Active and nin active content
     currentForm: string = 'form1';
  
     toggleForms(form: string) {
       this.currentForm = form;
     }

}
