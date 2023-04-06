import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';

const routes: Routes = [
  {path:"",component:UserHomepageComponent},
  {path:"tickets",component:TicketsComponent},
  {path:"login",component:LoginComponent},
  {path:"subscriptions",component:SubscriptionsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
