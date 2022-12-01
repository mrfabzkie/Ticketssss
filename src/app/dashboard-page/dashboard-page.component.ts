import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTicketComponent } from '../tickets/update-ticket/update-ticket.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {


  constructor(
    private dialog: MatDialog, 
    private router: Router,) {}

  // nav(destination: string) {
  //   this.router.navigate([destination]);
  // }
  openDialog(){
    this.dialog.open(UpdateTicketComponent,{
      
    })
  }
}
