import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    
    public static BASE_URL='http://localhost:8080/';
    
    constructor(private httpClient: HttpClient) {}

    private refreshrequired = new Subject<void>();
    getRefreshRequired() {
        return this.refreshrequired;
    }
    public postTicket(email: string, ticketID: number):Observable<any>{
        return this.httpClient.post(TicketService.BASE_URL + "ticket/" + email,ticketID).pipe(
            catchError(error=>{return throwError(error);} ));
         }
    public getTicket(email: string):Observable<any>{
            return this.httpClient.get(TicketService.BASE_URL + "ticket/" + email).pipe(
                catchError(error=>{return throwError(error);} ));
             }
    public withdrawTicket(ticketID: number,email: string): Observable<any> {
        return this.httpClient.put(TicketService.BASE_URL  + "/" + ticketID,email).pipe(
            (tap(() => this.refreshrequired.next())),
            catchError(error => {
                return throwError(error);}) );
        }
}