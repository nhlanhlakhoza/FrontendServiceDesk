import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:"",component:UserHomepageComponent},
  {path:"tickets",component:TicketsComponent},
  {path:"login",component:LoginComponent},
  {path:"subscriptions",component:NavbarComponent},
  {path:"register",component:RegisterComponent},
  {path:"main",component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
