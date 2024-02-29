import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Company/pages/authentication/login/login.component';
import { RegisterComponent } from './Company/pages/authentication/register/register.component';
import { MainComponent } from './Company/pages/main/main.component';
import { ForgotpasswordComponent } from './Company/pages/authentication/forgotpassword/forgotpassword.component';
import { TemplateComponent } from './End-user/pages/template/template.component';
import { UserLoginComponent } from './End-user/pages/user-login/user-login.component';
import { TicketsComponent } from './End-user/components/tickets/tickets.component';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './Employee/employee-register/employee-register.component';
import { EmployeeForgortPasswordComponent } from './Employee/employee-forgort-password/employee-forgort-password.component';
import { EmployeeTicketsComponent} from './Employee/employee-tickets/employee-tickets.component';
import { TicketDetailsComponent } from './Employee/ticket-details/ticket-details.component';
import { KnowledgebaseComponent } from './Employee/knowledgebase/knowledgebase.component';
import { SettingsComponent } from './Employee/settings/settings.component';
import { NoTicketsComponent } from './Employee/no-tickets/no-tickets.component';
import { AdminLoginComponent } from './Super-Admin/admin-login/admin-login.component';
import { AdminFgtPasswordComponent } from './Super-Admin/admin-fgt-password/admin-fgt-password.component'; 
import { AdminDashboardComponent } from './Super-Admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './Super-Admin/admin-users/admin-users.component';
import { SubscriptionsComponent } from './Super-Admin/subscriptions/subscriptions.component';
import { AdminSettingsComponent } from './Super-Admin/admin-settings/admin-settings.component';


const routes: Routes = [
  
  {path:"success",component:TemplateComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"main",component:MainComponent},
  {path:"tickets", component:TicketsComponent},
  {path:"forgotpwd",component:ForgotpasswordComponent},
  {path:"",component:UserLoginComponent},
  {path:"employee-login",component:EmployeeLoginComponent},
  {path:"employee-register",component:EmployeeRegisterComponent},
  {path:"employee-fgt-password",component:EmployeeForgortPasswordComponent},
  {path:"employee-tickets",component:EmployeeTicketsComponent},
  {path:"ticket-details",component:TicketDetailsComponent},
  {path:"knowledgebase",component:KnowledgebaseComponent},
  {path:"employee-settings",component:SettingsComponent},
  {path:"no-tickets",component:NoTicketsComponent},


  //Super Admin's routes

  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-password",component:AdminFgtPasswordComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"admin-users",component:AdminUsersComponent},
  {path:"admin-subscriptions",component:SubscriptionsComponent},
  {path:"admin-settings",component:AdminSettingsComponent},















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
