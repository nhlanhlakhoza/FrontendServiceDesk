import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {

  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  notificationVisible = false;
  message = "Notification Message";

  toggleNotification() {
    this.notificationVisible = !this.notificationVisible;
  }

  logoImage: string | ArrayBuffer | null = 'assets/images/Ellipse 73.svg'; 
onFileSelected(event: any) 
{
const file: File = event.target.files[0];
if (file) {
 const reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onload = () => {
 this.logoImage = reader.result as string | ArrayBuffer; 
   };
}
}

  
}
