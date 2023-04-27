import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    static baseUrl = 'http://localhost:8080/';
    static Origin= 'http://localhost:4200/';
}
  export const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': `${DataService.Origin}`,
        /*'Authorization': 'Bearer' + baseUrl,*/
        'Access-Control-Allow-Credentials': 'true','Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE','skip':'true'
      })
    };
  

