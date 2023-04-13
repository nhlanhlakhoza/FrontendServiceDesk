import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserHomepageComponent } from 'src/app/pages/user-homepage/user-homepage.component';
import { Departments } from 'src/app/utility/models/department.data';
import { DynamicDataService } from 'src/app/utility/services/Dynamic/dynamic_data.service';
import { TicketInfoComponent } from '../ticket-info/ticket-info.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{
  filterTerm!: string;
  department=Departments;
  defaultComponent: any;

  constructor(private dataservice: DynamicDataService){
    this.defaultComponent = TicketsComponent;
  }
  ticketForm= new FormGroup({
    Subject: new FormControl('',Validators.required),
    Description:new FormControl('',Validators.required),
    Department:new FormControl('',Validators.required)
  })
  get v (){
    return this.ticketForm.controls;
  }
  openComponent(value:string){
    switch (value)
    {
      case "viewtickets":
                  this.defaultComponent=TicketInfoComponent;
                  break;   
    }
  }
  ngOnInit(): void {}
  switch():void{ this.dataservice.putDataStream("viewtickets")
}
}
