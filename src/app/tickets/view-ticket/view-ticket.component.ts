import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  providers: [TicketService],
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
})
export class ViewTicketComponent {
  constructor(private ticketService: TicketService, private fb: FormBuilder) {}

  @Input() viewedTicket: any;
  @Output() viewStatus = new EventEmitter<boolean>();

  ngOnChanges(): void{
    console.log(this.viewedTicket);
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
}
