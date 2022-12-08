import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Ticket } from '../models/ticket';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class TicketService {
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public createTicket(formData: any): Observable<any> {
    return this.http.post<any>(this.baseURL + '/ticket/create', formData);
  }

  public getAllSearchedTicket(searchedValue: any, tracker: any, status: any): Observable<any> {

    const params = new HttpParams()
      .set('description',searchedValue)
      .set('tracker', tracker)
      .set('status', status);

    return this.http.get<any>(this.baseURL + '/ticket/all',{
      observe: 'response',
      params: params
    });
  }

  public getActiveSearchedTicket(searchedValue: any, tracker: any, status: any): Observable<any>{
    const params = new HttpParams()
    .set('description',searchedValue)
    .set('tracker', tracker)
    .set('status', status);

    return this.http.get<any>(this.baseURL + '/ticket/active', {
      observe: 'response',
      params: params,
    });
  }

  public getAgingSearchedTicket(searchedValue: any, tracker: any, status: any): Observable<any>{
    const params = new HttpParams()
    .set('description',searchedValue)
    .set('tracker', tracker)
    .set('status', status);

    return this.http.get<any>(this.baseURL + '/ticket/aging', {
      observe: 'response',
      params: params,
    });
  }
}
