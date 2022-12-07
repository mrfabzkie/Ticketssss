import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.scss'],
  providers: [TicketService],
})

export class DeleteTicketComponent {
  @Input() deletedTicket: any;

  @Output() deleteStatus = new EventEmitter<boolean>();

  onClose(){
    this.deleteStatus.emit(false);
  }
}


