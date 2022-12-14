import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { User } from '../models/user';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class UserService {
 

  baseURL = 'http://localhost:8080/user';
  private loggedInUser = new BehaviorSubject("0");


  constructor(private http: HttpClient) {}

  public loginUser(userID: number, password: string): Observable<any> {
    const params = new HttpParams()
      .set('userID', userID)
      .set('password', password);

    return this.http.get<any>(this.baseURL + '/login', {
      observe: 'response',
      params: params,
    });
  }

  public getSpecificUser(userID: number): Observable<any> {
    const params = new HttpParams().set('userID', userID);

    return this.http.get<any>(this.baseURL + '/info', {
      observe: 'response',
      params: params,
    });
  }

  public getAllUsers(): Observable<any>{
    return this.http.get<any>(this.baseURL + '/all');
  }

  public getAllSearchedUsers(searchedValue: string, role: string): Observable<any>{
    const params = new HttpParams()
    .set('name',searchedValue)
    .set('role', role);

    return this.http.get<any>(this.baseURL + '/search', {
      observe: 'response',
      params: params,
    });
  }

  public deleteUsers(formData: any): Observable<any>{
    return this.http.post<any>(this.baseURL + '/delete', formData);
  }

  public registerUser(formData: any): Observable<any>{
    console.log('register?');
    return this.http.post<any>(this.baseURL + '/register', formData);
  }


  public updatedUser(formData: any) :Observable<any> {
    return this.http.post<any>(this.baseURL + '/update', formData);
  }

  public setLoggedInUser(userID: string){
    this.loggedInUser.next(userID);
  }

  public getLoggedInUser(){
    return this.loggedInUser.asObservable();
  }


}

