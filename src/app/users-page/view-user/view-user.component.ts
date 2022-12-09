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
})
export class ViewUserComponent implements OnChanges, OnInit {

  constructor(
    private userService: UserService,
  ) {}


  @Input() viewedUser: any;
  @Output() viewedStatus= new EventEmitter<boolean>();


  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  onClose() {
    this.viewedStatus.emit(false);
  }


}


  
