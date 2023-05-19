import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Company/pages/authentication/login/login.component';
import { RegisterComponent } from './Company/pages/authentication/register/register.component';
import { MainComponent } from './Company/pages/main/main.component';
import { ForgotpasswordComponent } from './Company/pages/authentication/forgotpassword/forgotpassword.component';
import { TemplateComponent } from './End-user/pages/template/template.component';
import { UserLoginComponent } from './End-user/pages/user-login/user-login.component';
import { TicketsComponent } from './End-user/components/tickets/tickets.component';

const routes: Routes = [
  {path:"",component:TemplateComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"main",component:MainComponent},
  {path:"tickets", component:TicketsComponent},
  {path:"forgotpwd",component:ForgotpasswordComponent},
  {path:"user-login",component:UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
