import { Component } from '@angular/core';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent {
  
  status:boolean = false;
  assignee:boolean = false;
  ticket:boolean = false;

  onClick(toggle : string) {
    if (toggle == "status") {
      this.status = !this.status;
      this.assignee = false;
      this.ticket = false;
    } else if (toggle == "assignee") {
      this.assignee = !this.assignee;
      this.status = false;
      this.ticket = false;
    } else {
      this.ticket = !this.ticket;
      this.status = false;
      this.assignee = false;
    }
    // this.status= !this.status;
    // 
    // this.ticket = !this.ticket;
  }
}
