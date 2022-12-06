import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTicketComponent } from '../tickets/update-ticket/update-ticket.component';
import { CreateTicketComponent } from '../tickets/create-ticket/create-ticket.component';
import { ViewTicketComponent } from '../tickets/view-ticket/view-ticket.component';
import { AddremTicketComponent } from '../tickets/addrem-ticket/addrem-ticket.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {


  constructor(
    private dialog: MatDialog, 
    private router: Router,) {}
    
    isCreating: boolean = false;


  openDialog(toggle : string){
    if (toggle == "update") {
      this.dialog.open(UpdateTicketComponent,{});
    } else if (toggle == "create") {
      this.dialog.open(CreateTicketComponent,{});
    } else if (toggle == "list") {
      this.dialog.open(TicketListComponent, {});
    } else if (toggle == "view") {
      this.dialog.open(ViewTicketComponent, {});
    } else if (toggle == "addrem") {
      this.dialog.open(AddremTicketComponent, {});
    }
  }

  onCreateTicket(){
    this.isCreating = true;
  }

}
