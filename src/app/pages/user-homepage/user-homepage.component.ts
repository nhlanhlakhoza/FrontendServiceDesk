import { Component, OnInit } from '@angular/core';
import { TicketsComponent } from '../../components/tickets/tickets.component';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  defaultComponent:any;
  constructor() { 
    this.defaultComponent=TicketsComponent;
  }
  ngOnInit(): void {
  }
}
