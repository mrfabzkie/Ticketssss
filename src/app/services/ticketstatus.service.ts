import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class TicketStatusService {
    baseURL = 'http://localhost:8080/ticket/status';

    constructor(private http: HttpClient) {}

    public getAllTicketStatus(): Observable<any> {
        return this.http.get<any>(this.baseURL + '/all');
      }
}