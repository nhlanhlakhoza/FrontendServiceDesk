import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserHomepageComponent } from 'src/app/End-user/pages/user-homepage/user-homepage.component';
import { Departments } from 'src/app/utility/models/department.data';
import { DynamicDataService } from 'src/app/utility/services/Dynamic/dynamic_data.service';
import { TicketInfoComponent } from '../ticket-info/ticket-info.component';
import { TicketService } from 'src/app/utility/services/tickets.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { Alert } from 'src/app/utility/alert/alert';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{

  filterTerm!: string;
  department=Departments;
  defaultComponent: any;
  info:any;
  selectedAttachment!: File;

  constructor(private router: Router, private dataservice: DynamicDataService, private ticketService: TicketService,private spinner:NgxSpinnerService,private alert:Alert)
  {this.defaultComponent = TicketsComponent;}
  ticketForm= new FormGroup({Subject: new FormControl('',Validators.required),
                            Description:new FormControl('',Validators.required),
                            Department:new FormControl('',Validators.required)})
  get v (){
    return this.ticketForm.controls;
    }
  openComponent(value:string){
    switch (value){
      case "viewtickets":
      this.defaultComponent=TicketInfoComponent;
      break;}}
  ngOnInit(): void {}switch():void{ this.dataservice.putDataStream("viewtickets")}
  getAttachment(event:any):void{this.selectedAttachment = event.target.files[0]}

  /*private postTicket(Tinfo:Tickets):void {
    this.spinner.show()
   
    this.ticketService.postTicket(Tinfo:Tickets).subscribe(data => {
      if(data){this.spinner.hide()}
      this.info=data;
      Swal.fire({position:'center',icon:'success',title:'Ticket logged',text:this.info.message, showConfirmButton:false,timer:10000})
      this.ticketForm.reset();
      this.router.navigateByUrl("/tickets")
    },error => {
      if(error){this.spinner.hide()}
      if(error.status!==0){
        Swal.fire({
          position:'center',
          icon:'error',
          title:'Failed!',text:error.error.message,
          showCancelButton:false,
          timer:5000
         })} else{this.alert.Toast.fire({icon:'error',title:'Service Unavailable'})}
  })}
*/
}


