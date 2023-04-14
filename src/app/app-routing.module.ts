import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './End-user/components/tickets/tickets.component';
import { LoginComponent } from './Company/pages/login/login.component';
import { UserHomepageComponent } from './End-user/pages/user-homepage/user-homepage.component';
import { NavbarComponent } from './End-user/layout/navbar/navbar.component';
import { RegisterComponent } from './Company/pages/register/register.component';
import { MainComponent } from './Company/pages/main/main.component';
import { TicketInfoComponent } from './End-user/components/ticket-info/ticket-info.component';
import { DashboardComponent } from './End-user/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:UserHomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"subscriptions",component:NavbarComponent},
  {path:"register",component:RegisterComponent},
  {path:"main",component:MainComponent},
  {path:"view-ticket",component:TicketInfoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
