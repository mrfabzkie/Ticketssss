import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketListComponent } from '../tickets/ticket-list/ticket-list.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { TrackerService } from '../services/tracker.service';
import { TicketStatusService } from '../services/ticketstatus.service';
import { UserService } from '../services/user.service';

enum TicketListType {
  All,
  Active,
  Aging,
}

@Component({
  selector: 'app-dashboard-page',
  providers: [TrackerService, TicketStatusService, UserService],
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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form.get('searchedValue')!.valueChanges.subscribe((result) => {
      this.filters['searchedValue'] = result;
      this.searchedValue = result!;
    });

    this.trackerService.getAllTrackers().subscribe((result) => {
      this.trackers$ = result['data'];
    });

    this.ticketStatusService.getAllTicketStatus().subscribe((result) => {
      this.ticketStatus$ = result['data'];
    });

    this.userService.getAllUsers().subscribe((result) => {
      this.users$ = result['data'];
    });

    this.changeTicketListTypeButtonLabel();
  }

  isCreating: boolean = false;
  isReminding: boolean = false;
  isAdding: boolean = false;
  trackers$: any[] = [];
  ticketStatus$: any[] = [];
  users$: any[] = [];
  showTicketListType = TicketListType.All;
  TicketListTypeButtonLabel = '';

  filters: any = {
    searchedValue: '',
    tracker: '',
    status: '',
  };

  searchedValue: String = '';
  tracker: String = '';
  status: String = '';

  form = this.fb.group({
    searchedValue: [''],
    tracker: [''],
    status: [''],
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

  changeTracker(value: any) {
    this.tracker = value.target.value;
    this.filters['tracker'] = value.target.value;
  }

  changeStatus(value: any) {
    this.status = value.target.value;
    this.filters['status'] = value.target.value;
  }

  changeShowTicketListType() {
    let index = this.showTicketListType;
    this.showTicketListType =
      this.showTicketListType == Object.keys(TicketListType).length / 2 - 1
        ? 0
        : index + 1;

    this.changeTicketListTypeButtonLabel();
  }

  changeTicketListTypeButtonLabel() {
    this.TicketListTypeButtonLabel =
      this.showTicketListType == Object.keys(TicketListType).length / 2 - 1
        ? TicketListType[0]
        : TicketListType[this.showTicketListType + 1];
  }

  tableToCSV() {
    let csv_data = [];

    var rows = document.getElementsByTagName('tr');
    for(var i = 0; i < rows.length; i++){
      var cols = rows[i].querySelectorAll('td,th');
      var csvrow = [];
      for(var j = 0; j < cols.length - 1 ; j++){
        csvrow.push(cols[j].innerHTML);
      }
      csv_data.push(csvrow.join(","));
    }

    var csv_string = csv_data.join('\n')

    this.downloadCSVFile(csv_string);
  }

  downloadCSVFile(data: any){
    let CSVFile = new Blob([data], { type: "text/csv"});
    var temp_link = document.createElement('a');

    let fileName = TicketListType[this.showTicketListType] + ' Tickets as of ' +  this.getCurrentDate() + '.csv'

    temp_link.download = fileName;
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    temp_link.click();
    document.body.removeChild(temp_link);
  }

  getCurrentDate(): String{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return (mm + '/' + dd + '/' + yyyy);
  }
}
