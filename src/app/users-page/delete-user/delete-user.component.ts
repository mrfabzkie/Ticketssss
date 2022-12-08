import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
  providers: [TicketService],
})
export class DeleteUserComponent {

  @Input() deletedTicket: any;

  @Output() deleteStatus = new EventEmitter<boolean>();

  onClose(){
    this.deleteStatus.emit(false);
  }
}
