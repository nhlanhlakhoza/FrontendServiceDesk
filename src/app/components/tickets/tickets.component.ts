import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departments } from 'src/app/utility/models/department.data';
import { Tickets } from 'src/app/utility/models/models';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{
  filterTerm!: string;
  department=Departments;

  ticketForm= new FormGroup({

    Subject:new FormControl('',Validators.required),
    Description:new FormControl('',Validators.required),
    Department:new FormControl('',Validators.required)
  })

  get v (){
    return this.ticketForm.controls;
  }

  ngOnInit(): void {
   
  }
}
