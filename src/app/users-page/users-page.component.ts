
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { TrackerService } from '../services/tracker.service';
import { TicketStatusService } from '../services/ticketstatus.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-page',
  providers: [TrackerService, TicketStatusService, UserService],
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private trackerService: TrackerService,
    private ticketStatusService: TicketStatusService,
    private userService: UserService,
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

    this.userService.getAllUsers().subscribe(result => {
      this.users$ = result['data'];
    })
  }

  isCreating: boolean = false;
  isReminding: boolean = false;
  isAdding: boolean = false;
  trackers$: any[] = [];
  ticketStatus$: any[] = [];
  users$: any[] = [];

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
