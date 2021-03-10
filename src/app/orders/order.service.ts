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
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer<${this.auth.Token}>`
    })
  };

  constructor(private http: HttpClient, private auth: AuthService) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders', this.httpOptions);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return this.http.post<Order>(this.baseUrl + 'orders', order, this.httpOptions);
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + `orders/${id}`, this.httpOptions);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order, this.httpOptions);
  }

}
