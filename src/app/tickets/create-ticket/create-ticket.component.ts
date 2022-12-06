import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  
  @Output() createStatus = new EventEmitter<boolean>();


  onClose() {
    this.createStatus.emit(false);
  }
}

