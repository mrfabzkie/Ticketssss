import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { CreateTicketComponent } from './tickets/create-ticket/create-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateTicketComponent } from './tickets/update-ticket/update-ticket.component';
import { ViewTicketComponent } from './tickets/view-ticket/view-ticket.component';
import { AddremTicketComponent } from './tickets/addrem-ticket/addrem-ticket.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    TicketsComponent,
    TicketListComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    ViewTicketComponent,
    AddremTicketComponent,
    HomePageComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
