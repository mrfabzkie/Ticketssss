import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnChanges {

  constructor(
    private fb: FormBuilder,
  ){}
  
  @Input() selectedTicket: any;
  @Input() ticketStatus: any;
  @Input() users: any;
  @Input() trackers: any;
  @Output() updatedStatus = new EventEmitter<boolean>();

  initialTracker: any;

  updatedTicket: any;

  form = this.fb.group({
    subject: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  ngOnInit(){}

  ngOnChanges(changes: SimpleChanges): void {
    this.f.subject.setValue(this.selectedTicket.subject);
    this.f.description.setValue(this.selectedTicket.description);
  }
  

  onClose(){
    this.updatedStatus.emit(false);
  }

  get f() {
    return this.form.controls;
  }
}
