import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTicketComponent } from '../tickets/update-ticket/update-ticket.component';
import { CreateTicketComponent } from '../tickets/create-ticket/create-ticket.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {


  constructor(
    private dialog: MatDialog, 
    private router: Router,) {}



  openDialog(toggle : string){
    if (toggle == "update") {
      this.dialog.open(UpdateTicketComponent,{});
    } else if (toggle == "create") {
      this.dialog.open(CreateTicketComponent,{});
    } else if (toggle == "list") {
      this.dialog.open(TicketListComponent, {});
    }
  }
}
