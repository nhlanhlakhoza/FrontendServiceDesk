import { Component, OnInit } from '@angular/core';
import { SubscriptionsComponent } from 'src/app/components/subscriptions/subscriptions.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  defaultComponent:any;
  constructor() { 
    this.defaultComponent=SubscriptionsComponent;
  }
  ngOnInit(): void {
  }
}
