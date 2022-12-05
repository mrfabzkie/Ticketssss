import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  providers: [TicketService],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  constructor(private ticketService: TicketService){}

  tickets$: any[] = [];

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((result) => {
      this.tickets$ = result['data'];
    })
  }

}
