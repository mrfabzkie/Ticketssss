import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  providers: [TicketService],
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
})
export class ViewTicketComponent {
  constructor(private ticketService: TicketService, private fb: FormBuilder) {}

  @Input() viewedTicket: Ticket = {
    ticketID: 0,
    status: 'NEW',
    subject: 'SUBJ',
    description: '',
    tracker: '',
    assignee: 0,
    requester: 0,
  };

  tickets$: any[] = [];

  form = this.fb.group({
    ticketID: [''],
  });

  onClose() {
    console.log('i got pressed');
    document.getElementById('view-ticket-modal')!.style.display = 'none';
    document.getElementById('view-ticket-modal-background')!.style.display =
      'none';
  }

  get f() {
    return this.form.controls;
  }
}
