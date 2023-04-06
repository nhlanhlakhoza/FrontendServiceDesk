import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewTicketComponent } from './pages/view-ticket/view-ticket.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"header",component:NavbarComponent},
  {path:"login",component:LoginComponent},
  {path:"side", component:SidebarComponent},
  {path:"tickets",component:TicketListComponent},
  {path:"Views",component:ViewTicketComponent},
  {path:"nav",component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
