
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { TrackerService } from '../services/tracker.service';
import { TicketService } from '../services/ticket.service';
import { TicketStatusService } from '../services/ticketstatus.service';

@Component({
  selector: 'app-users-page',
  providers: [UserService, TrackerService, TicketService, TicketStatusService],
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit(){
    this.form.get('searchedValue')!.valueChanges.subscribe(result => {
      this.filters['searchedValue'] = result;
      this.searchedValue = result!;
    });
  }

  filters: any = {
    searchedValue: '',
    role: '',
  }

  searchedValue: String = '';
  role: String = '';

  form = this.fb.group({
    searchedValue: [''],
    role: ['']
  });

  get f() {
    return this.form.controls;
  }

  changeRole(value: any){
    this.role = value.target.value;
    this.filters['status'] = value.target.value;
  }
}
