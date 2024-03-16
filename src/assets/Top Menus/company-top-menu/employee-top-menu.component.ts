import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-top-menu',
  templateUrl: './employee-top-menu.component.html',
  styleUrls: ['./employee-top-menu.component.css']
})
export class EmployeeTopMenuComponent {
  
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  notificationVisible = false;
  message = "Notification Message";

  toggleNotification() {
    this.notificationVisible = !this.notificationVisible;
  }

}
