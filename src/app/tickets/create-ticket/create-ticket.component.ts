import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  providers: [TicketService],
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  
  @Output() createStatus = new EventEmitter<boolean>();
  @Input() trackers: any;
  @Input() users:any;



  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService
  ){}

  form = this.fb.group({
    subject: [''],
    description: [''],
  });

  selectedTracker: string = '';
  selectedAssignee: string = '';



  onClose() {
    let formData: FormData = new FormData();
    let createdAt = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    
    formData.append('status', 'NEW');
    formData.append('tracker', this.selectedTracker);
    formData.append('subject', this.f.subject.value!);
    formData.append('description', this.f.description.value!);
    formData.append('assignee', this.selectedAssignee);
    formData.append('requester', '11');
    formData.append('createdAt', createdAt);

    this.ticketService.createTicket(formData).subscribe(result => {});
    this.createStatus.emit(false);
  }


  changeTracker(tracker: any){
    this.selectedTracker = tracker.target.value;
  }

  changeAssignee(assignee: any){
    this.selectedAssignee = assignee.target.value;
  }

  get f() {
    return this.form.controls;
  }
}

