import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  providers: [TicketService],
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent {
  constructor(
    private ticketService: TicketService,
    private fb: FormBuilder,
  ){}

  tickets$ : any[] = [];

  form = this.fb.group({
    ticketID: [''],
  });

  onClose(){
    console.log("i got pressed");
    document.getElementById("view-ticket-modal")!.style.display = "none";
    document.getElementById("view-ticket-modal-background")!.style.display = "none";
  }

  onSearch(){

  }
  

  get f(){
    return this.form.controls;
  }
}
