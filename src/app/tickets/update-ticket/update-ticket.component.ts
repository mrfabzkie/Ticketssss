import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent {
  
  @Input() updatedTicket: any;

  @Output() updatedStatus = new EventEmitter<boolean>();

  onClose(){
    this.updatedStatus.emit(false);
  }

  status:boolean = true;
  assignee:boolean = false;
  ticket:boolean = false;

  onClick(toggle : string) {
    if (toggle == "status") {
      this.status = !this.status;
      this.assignee = false;
      this.ticket = false;
    } else if (toggle == "assignee") {
      this.assignee = !this.assignee;
      this.status = false;
      this.ticket = false;
    } else {
      this.ticket = !this.ticket;
      this.status = false;
      this.assignee = false;
    }
  }
}
