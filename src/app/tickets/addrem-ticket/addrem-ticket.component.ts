import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-addrem-ticket',
  providers: [TicketService],
  templateUrl: './addrem-ticket.component.html',
  styleUrls: ['./addrem-ticket.component.scss']
})
export class AddremTicketComponent {

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
  ){}
  
  @Output() remindStatus = new EventEmitter<boolean>();


  onClose() {
    let formData = new FormData();
    formData.append('description', this.f.description.value!);
    
    if(this.f.description.value != ''){
      this.ticketService.remindAgingTickets(formData).subscribe(result => {});
    }
    this.remindStatus.emit(false);
  }

  form = this.fb.group({
    description: ['', [Validators.required]],
  });


  get f() {
    return this.form.controls;
  }
}

