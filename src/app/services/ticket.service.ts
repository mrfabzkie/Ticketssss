import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Ticket } from '../models/ticket';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class TicketService {
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getAllTickets(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/ticket/all');
  }

  public createTicket(ticket: Ticket): Observable<any> {
    const params = new HttpParams()
      .set('status', 'NEW')
      .set('subject', ticket.subject)
      .set('description', ticket.description)
      .set('tracker', ticket.tracker)
      .set('assignee', ticket.assignee)
      .set('requester', ticket.requester);

    const body = JSON.stringify(ticket);
    return this.http.post<any>(this.baseURL + '/ticket/create', body, {
      observe: 'response',
      params: params,
    });
  }

  public getSearchedTicket(searchedValue: any, tracker: any, status: any): Observable<any> {

    const params = new HttpParams()
      .set('ticketID',searchedValue)
      .set('tracker', tracker)
      .set('status', status);

    return this.http.get<any>(this.baseURL + '/ticket/search',{
      observe: 'response',
      params: params
    });
  }
}
