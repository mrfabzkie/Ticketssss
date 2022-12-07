import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { TrackerService } from '../services/tracker.service';
import { TicketStatusService } from '../services/ticketstatus.service';

@Component({
  selector: 'app-dashboard-page',
  providers: [TrackerService, TicketStatusService],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private trackerService: TrackerService,
    private ticketStatusService: TicketStatusService,
  ) {}

  ngOnInit(){
    this.form.get('searchedValue')!.valueChanges.subscribe(result => {
      this.filters['searchedValue'] = result;
      this.searchedValue = result!;
    });

    this.trackerService.getAllTrackers().subscribe(result => {
      this.trackers$ = result['data'];
    });

    this.ticketStatusService.getAllTicketStatus().subscribe(result =>{
      this.ticketStatus$ = result['data'];
    });
  }

  isCreating: boolean = false;
  isReminding: boolean = false;
  trackers$: any[] = [];
  ticketStatus$: any[] = [];

  filters: any = {
    searchedValue: '',
    tracker: '',
    status: '',
  }

  searchedValue: String = '';
  tracker: String = '';
  status: String = '';

  form = this.fb.group({
    searchedValue: [''],
    tracker: [''],
    status: ['']
  });

  onCreateTicket() {
    this.isCreating = true;
  }

  onRemindTicket() {
    this.isReminding = true;
  }

  createStatus(value: any) {
    this.isCreating = value;
  }

  remindStatus(value: any) {
    this.isReminding = value;
  }

  get f() {
    return this.form.controls;
  }

  changeTracker(value: any){
    this.tracker = value.target.value;
    this.filters['tracker'] = value.target.value;
  }

  changeStatus(value: any){
    this.status = value.target.value;
    this.filters['status'] = value.target.value;
  }
}
