import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  providers: [TicketService],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnChanges, OnInit{

  constructor(private ticketService: TicketService, private dialog: MatDialog, ){}

  @Input() searchedValueFilter: any;
  @Input() trackerFilter: any;
  @Input() statusFilter: any;

  isViewing: boolean = false;
  tickets$: any[] = [];
  selectedTicket:any;


  ngOnInit(): void {
    this.ticketService.getSearchedTicket(
      this.searchedValueFilter,
      this.trackerFilter,
      this.statusFilter,
    ).subscribe((result) => {
      this.tickets$ = [];
      this.tickets$ = result['body']['data'];
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ticketService.getSearchedTicket(
      this.searchedValueFilter,
      this.trackerFilter,
      this.statusFilter,
    ).subscribe((result) => {
      console.log(result);
      this.tickets$.splice(0);
      this.tickets$ = result['body']['data'];
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
