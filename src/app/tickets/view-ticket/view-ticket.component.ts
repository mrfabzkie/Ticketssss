import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

@Component({
  selector: 'app-view-ticket',
  providers: [TicketService],
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
})
export class ViewTicketComponent {
  constructor(
    private ticketService: TicketService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  @Input() viewedTicket: any;
  @Output() viewStatus = new EventEmitter<boolean>();
  requester: String = '';
  assignee: String = '';
  displayDate: String = '';

  ngOnChanges(): void {
    this.userService.getSpecificUser(this.viewedTicket.requester).subscribe((result) => {
      let data: any = result['body']['data'];
      this.requester = data['name'];
    })

    this.userService.getSpecificUser(this.viewedTicket.assignee).subscribe((result) => {
      let data: any = result['body']['data'];
      this.assignee = data['name'];
    })

    this.convertToReadableDate();
  }

  form = this.fb.group({
    ticketID: [''],
  });

  onClose() {
    this.viewStatus.emit(false);
  }

  get f() {
    return this.form.controls;
  }

  convertToReadableDate(){
    const [year, month, day] = this.viewedTicket.createdAt.split('-');
    let dateParse = new Date(year, month-1, day);
    this.displayDate = monthNames[dateParse.getMonth()] + ' ' + dateParse.getDate() + ', ' + dateParse.getFullYear();
  }
}
