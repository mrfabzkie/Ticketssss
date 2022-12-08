import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DeleteTicketComponent } from './tickets/ticket-list/delete-ticket/delete-ticket.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    
  },
  {
    path: 'login',
    component: LoginPageComponent,
    
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    
  },
  {
    path: 'home',
    component: HomePageComponent,
    
  },
  {
    path: 'menu',
    component: DashboardPageComponent,
    
  },
  {
    path: 'delete',
    component: DeleteTicketComponent,
    
  },

  {
    path: 'users',
    component: UsersPageComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
