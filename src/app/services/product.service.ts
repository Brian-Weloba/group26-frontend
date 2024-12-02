import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUri = 'http://localhost:3200/api/v1';

  constructor(private http: HttpClient) { }

  getProductsWithReviews():Observable<any> {
    return this.http.get(`${this.apiUri}/products/reviews`);
  }

  getProductWithReviewsById(productId: string):Observable<any> {
    return this.http.get(`${this.apiUri}/products/reviews/${productId}`);
  }

  createReview(review: any):Observable<any> {
    return this.http.post(`${this.apiUri}/reviews`, review);
  }
}

