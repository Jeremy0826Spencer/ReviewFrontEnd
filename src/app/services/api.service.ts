// api.service.ts
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location as MyLocation } from '../Classes/Location';


@Injectable({
    providedIn: 'root'
  })
export class ApiService
{
  private baseUrl = `https://testingjlsback.tech:8443/demo-0.0.1-SNAPSHOT/api/v1`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  /*
  getLocationByCity(): Observable<any> {
        
    return this.httpClient.get(baseUrl);
  }
  */
  getAllLocations(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.baseUrl}/location`);
  }
      
  addLocation(location: MyLocation): Observable<MyLocation> {
    return this.httpClient
    .post<MyLocation>(`${this.baseUrl}/location`, location, this.httpOptions)
    .pipe(catchError(this.handleError<MyLocation>('addLocation')));
  }


  // Add the error handling function (if not already defined)
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // You can handle the error here, e.g., logging or showing an error message
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
    }
  }
}