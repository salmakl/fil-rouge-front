import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http:HttpClient) { }

  createOrder(order: Order):Observable<Order>{
    return this.http.post<Order>(`${environment.apiUrl}order/add`, order);
  }
}
