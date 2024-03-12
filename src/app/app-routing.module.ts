import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './End-user/pages/template/template.component';
import { UserLoginComponent } from './End-user/pages/user-login/user-login.component';
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
import { AdminUsersComponent } from './Super-Admin/admin-users/admin-users.component';
import { SubscriptionsComponent } from './Super-Admin/subscriptions/subscriptions.component';
import { AdminSettingsComponent } from './Super-Admin/admin-settings/admin-settings.component';
import { EditSubscriptionComponent } from './Super-Admin/edit-subscription/edit-subscription.component';
import { CompanyAdminDashboardComponent } from '../CompanyAdmin/company-admin-dashboard/company-admin-dashboard.component';
import { CompanySettingsComponent } from '../CompanyAdmin/company-settings/company-settings.component';
import { CompanyTicketsComponent } from '../CompanyAdmin/company-tickets/company-tickets.component';
import { ReportsComponent } from '../CompanyAdmin/reports/reports.component';
import { MoreSettingsComponent } from '../CompanyAdmin/more-settings/more-settings.component';
import { ViewEmployeeComponent } from '../CompanyAdmin/view-employee/view-employee.component';
import { AdminDashboardComponent } from './Super-Admin/admin-dashboard/admin-dashboard.component';
import { ViewAgentsComponent } from '../CompanyAdmin/view-agents/view-agents.component';



const routes: Routes = [
  
  {path:"success",component:TemplateComponent},

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
  {path:"admin-users",component:AdminUsersComponent},
  {path:"admin-subscriptions",component:SubscriptionsComponent},
  {path:"admin-settings",component:AdminSettingsComponent},
  {path:"edit-subscription",component:EditSubscriptionComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},



  //Company Admins' routes
  {path:"company-dashboard",component:CompanyAdminDashboardComponent},
  {path:"company-settings",component:CompanySettingsComponent},
  {path:"company-reports",component:ReportsComponent},
  {path:"company-tickets",component:CompanyTicketsComponent},
  {path:"more-settings",component: MoreSettingsComponent},
  {path:"view-employee",component: ViewEmployeeComponent},
  {path:"view-agents",component: ViewAgentsComponent},




















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
