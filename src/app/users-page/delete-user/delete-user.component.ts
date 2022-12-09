import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
  providers: [UserService],
})
export class DeleteUserComponent {

  @Input() deletedUser: any;
  
  @Output() deleteStatus = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
  ){}

  onClose(){
    this.deleteStatus.emit(false);
  }

  onDelete() {
    let formData: FormData = new FormData();

    formData.append('userID', this.deletedUser.userID);
    
    this.userService.deleteUsers(formData).subscribe(result => {});
    this.onClose();
  }
}
