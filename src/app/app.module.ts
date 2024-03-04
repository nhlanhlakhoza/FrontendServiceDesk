import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './Company/layout/footer/footer.component';
import { LoginComponent } from './Company/pages/authentication/login/login.component';
import { RegisterComponent } from './Company/pages/authentication/register/register.component';
import { MainComponent } from './Company/pages/main/main.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ForgotpasswordComponent } from './Company/pages/authentication/forgotpassword/forgotpassword.component';
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
import { AdminDashboardComponent } from './Super-Admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './Super-Admin/admin-users/admin-users.component';
import { SubscriptionsComponent } from './Super-Admin/subscriptions/subscriptions.component';
import { AdminSettingsComponent } from './Super-Admin/admin-settings/admin-settings.component';
import { EditSubscriptionComponent } from './Super-Admin/edit-subscription/edit-subscription.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { UnresolvedComponent } from './unresolved/unresolved.component';
import { InProgressComponent } from './in-progress/in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ForgotpasswordComponent,
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
    AdminDashboardComponent,
    AdminUsersComponent,
    SubscriptionsComponent,
    AdminSettingsComponent,
    EditSubscriptionComponent,
    BarGraphComponent,
    UnresolvedComponent,
    InProgressComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule, 
    BrowserAnimationsModule
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},EncryptionDecryption,DynamicDataService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
