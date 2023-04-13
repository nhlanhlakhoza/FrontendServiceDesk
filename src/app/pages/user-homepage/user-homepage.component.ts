import { Component, OnInit } from '@angular/core';
import { TicketsComponent } from '../../components/tickets/tickets.component';
import { DynamicDataService } from 'src/app/utility/services/Dynamic/dynamic_data.service';
import { TicketInfoComponent } from 'src/app/components/ticket-info/ticket-info.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
compo:string="";
  defaultComponent:any;
  constructor(private dataservice:DynamicDataService) { 
    this.defaultComponent= DashboardComponent;
    const dara = this.dataservice.getDataStream();
    dara.subscribe({
      next: (dara:string)=>{
        this.compo=dara;
        switch (this.compo)
        {
                  case "tickets":
                  this.defaultComponent=TicketsComponent;
                  break;
                  case "viewtickets":
                  this.defaultComponent=TicketInfoComponent;
                  break;
        }
      }
    })
  }
  openComponent(value:string){
    switch (value)
    {
      case "tickets":
            this.defaultComponent=TicketsComponent;
            break;   
    }
  }
  ngOnInit(): void {
  }
}
