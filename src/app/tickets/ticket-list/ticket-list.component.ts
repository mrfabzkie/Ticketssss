import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ViewTicketComponent } from '../view-ticket/view-ticket.component';

@Component({
  selector: 'app-ticket-list',
  providers: [TicketService],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  
  viewedTicket : Ticket = {
    ticketID: 0,
    status: 'NEW',
    subject: 'SUBJ',
    description: '',
    tracker: '',
    assignee: 0,
    requester: 0
  }

  constructor(private ticketService: TicketService, private dialog: MatDialog, ){}

  tickets$: any[] = [];

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((result) => {
      this.tickets$ = result['data'];
    })
  }

  onClickView(i: number){
    this.viewedTicket.ticketID = this.tickets$[i]['ticketID'];
    this.viewedTicket.tracker = this.tickets$[i]['tracker'];
    this.viewedTicket.assignee = this.tickets$[i]['assignee'];
    this.viewedTicket.subject = this.tickets$[i]['subject'];
    this.viewedTicket.description = this.tickets$[i]['description'];

    this.dialog.open(ViewTicketComponent, {});
  }

}
