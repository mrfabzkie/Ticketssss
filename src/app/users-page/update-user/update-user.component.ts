import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  @Input() updatedTicket: any;

  @Output() updatedStatus = new EventEmitter<boolean>();

  onClose(){
    this.updatedStatus.emit(false);
  }

  status:boolean = true;
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
  }
}
