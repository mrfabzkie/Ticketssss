import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {


  constructor(
    private dialog: MatDialog,
    private router: Router) {}

  // openList(){
  //   this.dialog.open(TicketListComponent,{
  //     width:'40%', height:'63%'
  //   })
  // }
}
