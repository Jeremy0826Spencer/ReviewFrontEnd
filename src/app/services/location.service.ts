import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '../models/location.model'; // Adjust path as necessary

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = `http://localhost:8081/public/api/v1/location`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllLocations(): Observable<any[]> {
    // Use the correct base URL and endpoint to fetch locations
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }
  

  getLocationDetails(locationId: number): Observable<Location> {
    return this.httpClient.get<Location>(`${this.baseUrl}/locationById/${locationId}`).pipe(
      catchError(this.handleError<Location>('getLocationDetails'))
    );
  }

  addLocation(location: Location): Observable<Location> {
    return this.httpClient.post<Location>(`${this.baseUrl}`, location, this.httpOptions)
    .pipe(catchError(this.handleError<Location>('addLocation')));
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getLocationByName(name: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/locationByName/${name}`);
  }

  getLocationByCity(city: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/locationByCity/${city}`);
  }

  getLocationByCityAndName(city: string, name: string): Observable<any[]> {
    // Note: Adjust the query parameter names to match those expected by your backend
    return this.httpClient.get<any[]>(`${this.baseUrl}/locationByBoth?city=${city}&locationName=${name}`);
  }

  getMostReviewedLocation(city: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/mostReviewedLocationByCity?city=${city}`);

  }
  
}
