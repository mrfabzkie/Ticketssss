import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  providers: [ UserService],
})
export class ViewUserComponent implements OnChanges, OnInit {

  @Input() viewedUser: any;
  @Output() viewedStatus= new EventEmitter<boolean>();


  onClose() {
    this.viewedStatus.emit(false);
    console.log("test");
  }
  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
}

}


  
