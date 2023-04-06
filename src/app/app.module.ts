import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewTicketComponent } from './pages/view-ticket/view-ticket.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    SubscriptionComponent,
    LoginComponent,
    SidebarComponent,
    TicketListComponent,
    ViewTicketComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
