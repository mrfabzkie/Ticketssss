import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [UserService],
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    userID: [''],
    password: [''],
  });

  nav(destination: string) {
    this.router.navigate([destination]);
  }

  onSubmit() {
    this.userService
      .loginUser(Number(this.f.userID.value!), this.f.password.value!)
      .subscribe((result) => {
        if (result['body']['data'] != null) {
          this.router.navigate(['home']);
        }
      });
  }

  get f() {
    return this.form.controls;
  }
}
