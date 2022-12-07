import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  providers: [TicketService],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  isViewing: boolean = false;

  constructor(private ticketService: TicketService, private dialog: MatDialog, ){}

  tickets$: any[] = [];

  selectedTicket:any;

  testData: String = 'SAMPLE';

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((result) => {
      this.tickets$ = result['data'];
    })
  }

  onClickView(i: number){
    this.selectedTicket = this.tickets$[i];
    this.isViewing = true;
  }

  viewStatus(value: any){
    this.isViewing = value;
  }

}
