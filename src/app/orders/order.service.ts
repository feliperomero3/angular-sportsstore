import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Order } from './order.model';

const PROTOCOL = environment.protocol;
const PORT = environment.port;
const HOST = environment.host;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer<${this.auth.Token}>`,
        'Content-Type': 'application/json',
        'Access-Control-Max-Age': '600'
      })
    };
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders', this.getHttpOptions());
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return this.http.post<Order>(this.baseUrl + 'orders', order, this.getHttpOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + `orders/${id}`, this.getHttpOptions());
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order, this.getHttpOptions());
  }

}
