import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8081/public/api/v1/review';

  constructor(private http: HttpClient) {}

  // Method to fetch reviews by location ID (already implemented)
  getReviewsByLocationId(locationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/byLocation/${locationId}`);
  }

  // New method to fetch a single review by its ID
  getReviewById(reviewId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/byReviewId/${reviewId}`);
  }

  createReview(reviewPayload: any) {
    return this.http.post<any>(`${this.baseUrl}`, reviewPayload);
  }
  

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}