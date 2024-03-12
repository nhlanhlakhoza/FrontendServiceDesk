import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDatepickerModule, MatCalendar } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepicker } from '@angular/material/datepicker';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';


import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './End-user/pages/template/template.component';
import { DashboardComponent } from './End-user/components/dashboard/dashboard.component';
import { TicketsComponent } from './End-user/components/tickets/tickets.component';
import { TicketsinfoComponent } from './End-user/components/ticketsinfo/ticketsinfo.component';
import { UserLoginComponent } from './End-user/pages/user-login/user-login.component';
import { EncryptionDecryption } from './utility/encryption/encryption.service';
import { HttpRequestInterceptor } from './utility/helpers/HttpInterceptor';
import { DynamicDataService } from './utility/services/Dynamic/dynamic_data.service';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './Employee/employee-register/employee-register.component';
import { EmployeeForgortPasswordComponent } from './Employee/employee-forgort-password/employee-forgort-password.component';
import { EmployeeTicketsComponent } from './Employee/employee-tickets/employee-tickets.component';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { UnresolvedComponent } from './unresolved/unresolved.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { SidebarComponent } from '../CompanyAdmin/sidebar/sidebar.component';
import { TopMenuComponent } from '../CompanyAdmin/top-menu/top-menu.component';
import { CompanyAdminDashboardComponent } from '../CompanyAdmin/company-admin-dashboard/company-admin-dashboard.component';
import { ReportsComponent } from '../CompanyAdmin/reports/reports.component';
import { CompanyTicketsComponent } from '../CompanyAdmin/company-tickets/company-tickets.component';
import { CompanySettingsComponent } from '../CompanyAdmin/company-settings/company-settings.component';
import { MoreSettingsComponent } from '../CompanyAdmin/more-settings/more-settings.component';
import { ViewEmployeeComponent } from '../CompanyAdmin/view-employee/view-employee.component';
import { SidebarEmployeeComponent } from './Employee/sidebar-employee/sidebar-employee.component';
import { AdminSidebarComponent } from './Super-Admin/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './Super-Admin/admin-dashboard/admin-dashboard.component';





@NgModule({
  declarations: [
    AppComponent,

    TemplateComponent,
    DashboardComponent,
    TicketsComponent,
    TicketsinfoComponent,
    UserLoginComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    EmployeeForgortPasswordComponent,
    EmployeeTicketsComponent,
    TicketDetailsComponent,
    KnowledgebaseComponent,
    SettingsComponent,
    NoTicketsComponent,
    AdminLoginComponent,
    AdminFgtPasswordComponent,
    AdminUsersComponent,
    SubscriptionsComponent,
    AdminSettingsComponent,
    EditSubscriptionComponent,
    BarGraphComponent,
    UnresolvedComponent,
    InProgressComponent,
    SidebarComponent,
    TopMenuComponent,
    CompanyAdminDashboardComponent,
    ReportsComponent,
    CompanyTicketsComponent,
    CompanySettingsComponent,
    MoreSettingsComponent,
    ViewEmployeeComponent,
    SidebarEmployeeComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    DragDropModule,
    MatInputModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule

    
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},EncryptionDecryption,DynamicDataService 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  bootstrap: [AppComponent]
})
export class AppModule { }
