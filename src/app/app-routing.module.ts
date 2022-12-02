import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
