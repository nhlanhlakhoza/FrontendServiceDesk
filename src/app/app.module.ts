import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './End-user/layout/navbar/navbar.component';
import { FooterComponent } from './Company/layout/footer/footer.component';
import { TicketsComponent } from './End-user/components/tickets/tickets.component';
import { LoginComponent } from './Company/pages/authentication/login/login.component';
import { SubscriptionsComponent } from './Company/components/subscriptions/subscriptions.component';
import { UserHomepageComponent } from './End-user/pages/user-homepage/user-homepage.component';
import { TicketInfoComponent } from './End-user/components/ticket-info/ticket-info.component';
import { RegisterComponent } from './Company/pages/authentication/register/register.component';
import { MainComponent } from './Company/pages/main/main.component';
import { DashboardComponent } from './End-user/components/dashboard/dashboard.component';
import { UserloginComponent } from './End-user/pages/userlogin/userlogin.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ForgotpasswordComponent } from './Company/pages/authentication/forgotpassword/forgotpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserHomepageComponent,
    FooterComponent,
    TicketsComponent,
    LoginComponent,
    SubscriptionsComponent,
    TicketInfoComponent,
    RegisterComponent,
    MainComponent,
    DashboardComponent,
    UserloginComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
