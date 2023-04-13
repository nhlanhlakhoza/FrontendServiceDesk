import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
<<<<<<< Updated upstream
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
=======
import { DashboardComponent } from './components/dashboard/dashboard.component';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    RegisterComponent,
    MainComponent,
=======
    DashboardComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
