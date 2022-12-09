import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  providers: [RoleService],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit{

  constructor (
    private router: Router,
    private userService: UserService,
    private roleService: RoleService,
    private fb: FormBuilder,
  ){}

  roles$ : any[] = [];
  selectedRole: any = '';

  ngOnInit(): void {
      this.roleService.getAllRoles().subscribe((result) => {
        this.roles$ = result['data'];
      })
  }

  form = this.fb.group({
    userID: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  nav(destination: string) {
    this.router.navigate([destination]);
  }

  onCreate(){
    let formData = new FormData();

    formData.append('userID', this.f.userID.value!);
    formData.append('password', this.f.password.value!);
    formData.append('name', this.f.name.value!);
    formData.append('role', this.selectedRole);

    this.userService.registerUser(formData).subscribe((result) => {});
    this.nav('home')
  }

  changeRole(role: any){
    this.selectedRole = role.target.value;
  }

  get f() {
    return this.form.controls;
  }
}
