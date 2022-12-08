import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [TicketService],
})
export class UsersListComponent implements OnChanges, OnInit {

  constructor(private userService: UserService) {}

  @Input() searchedValueFilter: any;
  @Input() roleFilter: any;

  isViewUser: boolean = false;
  selectedUser: any;
  users$: any[] = [];


  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.userService
      .getAllSearchedUsers(this.searchedValueFilter, '')
      .subscribe((result) => {
        this.users$ = result['body']['data'];
      });
    console.log(changes);
  }

  onClickView(i: number) {
    this.selectedUser = this.users$[i];
    this.isViewUser = true;
  }

  viewedStatus(value: any) {
    this.isViewUser = value;
  }
}
