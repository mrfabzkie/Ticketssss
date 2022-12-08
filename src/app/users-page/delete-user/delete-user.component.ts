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

  constructor(
    private ticketService: TicketService,
  ){}

  onClose(){
    this.deleteStatus.emit(false);
  }

  onDelete() {
    let formData: FormData = new FormData();

    formData.append('ticketID', this.deletedTicket.ticketID);
    
    this.ticketService.deleteTicket(formData).subscribe(result => {});
    this.onClose();
  }
}
