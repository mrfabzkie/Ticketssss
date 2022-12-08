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
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [TicketService],
})
export class UsersListComponent implements OnChanges, OnInit {

  users$ : any []=[];

  @Input() searchedValueFilter: any;
  @Input() roleFilter: any;

  constructor(
    private userService: UserService,
  ) {}
  ngOnInit(): void {

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getAllSearchedUsers(this.searchedValueFilter,"").subscribe((result) => {
      this.users$ = result['body']['data'];
      console.log(this.users$);

    });
    console.log(changes);
  }


}
