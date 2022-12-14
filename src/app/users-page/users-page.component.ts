
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { TrackerService } from '../services/tracker.service';
import { TicketService } from '../services/ticket.service';
import { TicketStatusService } from '../services/ticketstatus.service';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-users-page',
  providers: [ TrackerService, TicketService, TicketStatusService, RoleService],
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
  ) {}

  roles$ : any []=[];
  selectedRole : any = "";

  ngOnInit(){
    this.form.get('searchedValue')!.valueChanges.subscribe(result => {
      this.searchedValue = result!;
      console.log(this.searchedValue);
    });

    this.roleService.getAllRoles().subscribe((result) => {
      this.roles$ = result['data'];
    });

  }

  ngOnChanges(changes: SimpleChanges): void{
  
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
    this.selectedRole = value.target.value;
  }

}
