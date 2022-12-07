import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class TrackerService {
    baseURL = 'http://localhost:8080/tracker';

    constructor(private http: HttpClient) {}

    public getAllTrackers(): Observable<any> {
        return this.http.get<any>(this.baseURL + '/all');
      }
}