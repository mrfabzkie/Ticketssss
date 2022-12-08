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
  providers: [TicketService],
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnChanges {

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
  ){}
  
  @Input() selectedTicket: any;
  @Input() ticketStatus: any;
  @Input() users: any;
  @Input() trackers: any;
  @Output() updatedStatus = new EventEmitter<boolean>();

  initialTracker: any;

  selectedAssignee: any;
  selectedTracker: any;
  selectedStatus: any;

  form = this.fb.group({
    subject: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  ngOnInit(){
    this.selectedAssignee = this.selectedTicket.assignee;
    this.selectedStatus = this.selectedTicket.status;
    this.selectedTracker = this.selectedTicket.tracker;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.f.subject.setValue(this.selectedTicket.subject);
    this.f.description.setValue(this.selectedTicket.description);
  }
  

  onClose(){
    let formData = new FormData();
    
    formData.append('ticketID', this.selectedTicket.ticketID);
    formData.append('status',  this.selectedStatus);
    formData.append('tracker', this.selectedTracker);
    formData.append('subject', this.f.subject.value!);
    formData.append('description', this.f.description.value!);
    formData.append('assignee', this.selectedAssignee);
    formData.append('requester', '11');
    formData.append('createdAt', this.selectedTicket.createdAt);

    this.ticketService.updateTicket(formData).subscribe(()=>{});

    this.updatedStatus.emit(false);
  }

  get f() {
    return this.form.controls;
  }

  changeTracker(tracker: any){
    this.selectedTracker = tracker.target.value;
  }

  changeAssignee(assignee: any){
    this.selectedAssignee = assignee.target.value;
  }

  changeStatus(status: any){
    this.selectedStatus = status.target.value;
  }
}
