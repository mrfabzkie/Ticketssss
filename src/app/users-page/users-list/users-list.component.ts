import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [TicketService,RoleService],
})
export class UsersListComponent implements OnChanges, OnInit {

  constructor(private userService: UserService,private roleService: RoleService) {}
  @Input() roles: any;
  @Input() searchedValueFilter: any;
  @Input() roleFilter: any;

  isDeleting: boolean = false;
  selectedUser: any;
  updatedUser: any;
  isUpdateUser: boolean = false;
  isViewUser: boolean = false;
  users$: any[] = [];


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userService
      .getAllSearchedUsers(this.searchedValueFilter, this.roleFilter)
      .subscribe((result) => {
        this.users$ = result['body']['data'];
      });
    // console.log(changes);
    
  }


  onUpdateView(i: number){
    this.selectedUser = this.users$[i];
    this.isUpdateUser = true;

  }

  onClickView(i: number) {
    this.selectedUser = this.users$[i];
    this.isViewUser = true;
  }


  onClickDelete(i: number) {
    this.selectedUser = this.users$[i];
    this.isDeleting = true;
  }

  deleteStatus(value: any) {
    this.isDeleting = value;
  }

  viewedStatus(value: any) {
    this.isViewUser = value;
  }

  updatedStatus(value: any) {
    this.isUpdateUser = value;
  }
}
