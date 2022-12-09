import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  providers: [UserService,RoleService],
})
export class UpdateUserComponent implements OnChanges{
  @Input() selectedUser: any;
  @Output() updatedUser = new EventEmitter<boolean>();
  @Input() roles : any [] = [];


  selectedRole: any;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ){}

  
  form = this.fb.group({
    name: ['selectedUser.name', [Validators.required]],
    password: ['selectedUser.password', [Validators.required]],
  });
  

  ngOnChanges(changes: SimpleChanges): void {
    this.f.name.setValue(this.selectedUser.name);
    this.f.password.setValue(this.selectedUser.password);
  }

  ngOnInit(){
    this.selectedRole = this.selectedUser.role;
    }



  onClose(){

   let formData = new FormData();
   
  formData.append('userID', this.selectedUser.userID);
  formData.append('password', this.f.password.value!);
  formData.append('name', this.f.name.value!);
  formData.append('role', this.selectedRole);


  this.userService.updatedUser(formData).subscribe(()=>{});
   this.updatedUser.emit(false);
 }


 get f() {
  return this.form.controls;

}
changeRole(role: any){
  this.selectedRole = role.target.value;
  console.log(this.selectedRole);
}
}
