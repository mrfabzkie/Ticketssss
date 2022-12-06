import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addrem-ticket',
  templateUrl: './addrem-ticket.component.html',
  styleUrls: ['./addrem-ticket.component.scss']
})
export class AddremTicketComponent {
  
  @Output() remindStatus = new EventEmitter<boolean>();


  onClose() {
    this.remindStatus.emit(false);
  }
}

