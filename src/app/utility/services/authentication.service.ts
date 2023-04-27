import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/models';
import { DataService, httpOptions } from '../dataservice/data.service';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: any;

  constructor(private httpClient: HttpClient) {
  //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
   isAccountExpired(): boolean {
    if (!this.currentUser) {
      return true; 
    }
    const expirationDate = new Date(this.currentUser.expiration);
    const currentDate = new Date();
    return expirationDate < currentDate;
  }

  private url = DataService.baseUrl + "api/customer/{companyId}/"

  public login(data: Login): Observable<Object> {
    return this.httpClient.post(this.url + 'login', data, httpOptions).pipe()
    }
  }
