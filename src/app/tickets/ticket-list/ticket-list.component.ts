import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketStatusService } from 'src/app/services/ticketstatus.service';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-ticket-list',
  providers: [TicketService],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnChanges, OnInit {
  constructor(
    private ticketService: TicketService,
    private dialog: MatDialog,
    private trackerService: TrackerService,
    private ticketStatusService: TicketStatusService
  ) {}

  @Input() searchedValueFilter: any;
  @Input() trackerFilter: any;
  @Input() statusFilter: any;
  @Input() showTicketListType: any;
  @Input() users: any;

  isViewing: boolean = false;
  isDeleting: boolean = false;
  isUpdating: boolean = false;
  tickets$: any[] = [];
  selectedTicket: any;
  trackers$: any[] = [];
  status$: any[] = [];

  ngOnInit(): void {
    this.trackerService.getAllTrackers().subscribe((result) => {
      this.trackers$ = result['data'];
      this.convertToTrackerDescription();
    });

    this.ticketStatusService.getAllTicketStatus().subscribe((result) => {
      this.status$ = result['data'];
      this.convertToStatusDescription();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showTicketListType == 0) {
      this.ticketService
        .getAllSearchedTicket(
          this.searchedValueFilter,
          this.trackerFilter,
          this.statusFilter
        )
        .subscribe((result) => {
          this.tickets$.splice(0);
          this.tickets$ = result['body']['data'];
          this.convertToTrackerDescription();
          this.convertToStatusDescription();
        });
    } else if (this.showTicketListType == 1) {
      this.ticketService
        .getActiveSearchedTicket(
          this.searchedValueFilter,
          this.trackerFilter,
          this.statusFilter
        )
        .subscribe((result) => {
          this.tickets$.splice(0);
          this.tickets$ = result['body']['data'];
          this.convertToTrackerDescription();
          this.convertToStatusDescription();
        });
    } else if (this.showTicketListType == 2){
      this.ticketService
      .getAgingSearchedTicket(
        this.searchedValueFilter,
        this.trackerFilter,
        this.statusFilter
      )
      .subscribe((result) => {
        this.tickets$.splice(0);
        this.tickets$ = result['body']['data'];
        this.convertToTrackerDescription();
        this.convertToStatusDescription();
      });
    }
  }

  onClickView(i: number) {
    this.selectedTicket = this.tickets$[i];
    this.isViewing = true;
  }

  viewStatus(value: any) {
    this.isViewing = value;
  }

  onClickDelete(i: number) {
    this.selectedTicket = this.tickets$[i];
    this.isDeleting = true;
  }

  deleteStatus(value: any) {
    this.isDeleting = value;
  }

  onClickUpdate(i: number) {
    this.selectedTicket = this.tickets$[i];
    this.convertBackToTracker();
    this.convertBackToStatus();
    this.isUpdating = true;
  }

  updateStatus(value: any) {
    this.isUpdating = value;
    this.convertBackToTrackerDescription();
    this.convertBackToStatusDescription();
  }

  convertToTrackerDescription() {
    if (this.trackers$.length != 0) {
      let trackers = this.trackers$;
      this.tickets$.forEach(function (ticket) {
        var result = trackers.find((obj) => {
          return obj['tracker'] === ticket['tracker'];
        });
        ticket['tracker'] = result['description'];
      });
    }
  }

  convertToStatusDescription() {
    if (this.status$.length != 0) {
      let status = this.status$;
      this.tickets$.forEach(function (ticket) {
        var result = status.find((obj) => {
          return obj['status'] === ticket['status'];
        });
        ticket['status'] = result['description'];
      });
    }
  }

    //Benefits to BEN
  convertBackToTracker(){
    var result = this.trackers$.find((obj: any) => {
      return obj['description'] === this.selectedTicket['tracker']
    });
    this.selectedTicket['tracker'] = result['tracker'];
  }
    //BEN to Benefits
  convertBackToTrackerDescription(){
    var result = this.trackers$.find((obj: any) => {
      return obj['tracker'] === this.selectedTicket['tracker'];
    })

    this.selectedTicket['tracker'] = result['description'];
  }

    //In Progress to INP
  convertBackToStatus(){
    var result = this.status$.find((obj: any) => {
      return obj['description'] === this.selectedTicket['status'];
    });
    this.selectedTicket['status'] = result['status'];
  }

    //INP to In Progress
  convertBackToStatusDescription(){
    var result = this.status$.find((obj) => {
      return obj['status'] === this.selectedTicket['status'];
    });
    this.selectedTicket['status'] = result['description'];
  }


}
