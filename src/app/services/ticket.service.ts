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

  public createTicket(formData: any): Observable<any> {
    return this.http.post<any>(this.baseURL + '/ticket/create', formData);
  }

  public getSearchedTicket(searchedValue: any, tracker: any, status: any): Observable<any> {

    const params = new HttpParams()
      .set('description',searchedValue)
      .set('tracker', tracker)
      .set('status', status);

    return this.http.get<any>(this.baseURL + '/ticket/search',{
      observe: 'response',
      params: params
    });
  }
}
