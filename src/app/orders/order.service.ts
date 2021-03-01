import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[];
  private baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return this.http.post<Order>(this.baseUrl + 'orders', order, this.httpOptions);
  }
}
