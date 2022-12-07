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
    private ticketStatusService: TicketStatusService,
  ) {}

  @Input() searchedValueFilter: any;
  @Input() trackerFilter: any;
  @Input() statusFilter: any;

  isViewing: boolean = false;
  isDeleting: boolean = false;
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
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ticketService
      .getSearchedTicket(
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
}
