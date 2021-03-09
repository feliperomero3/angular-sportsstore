import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Product } from './product.model';
import { AuthService } from '../auth/auth.service';

const PROTOCOL = environment.protocol;
const PORT = environment.port;
const HOST = environment.host;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer<${this.auth.Token}>`
    })
  };

  constructor(private http: HttpClient, private auth: AuthService) { }

  getProducts(category: string = null): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products', this.httpOptions)
      .pipe(
        map((ps) => {
          return ps.filter((p) => category == null || category === '' || p.category === category);
        })
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'products/' + id, this.httpOptions);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products', this.httpOptions).pipe(
      map((ps) => ps.map((p) => p.category)),
      map((ps) => ps.filter((c, index, array) => array.indexOf(c) === index).sort())
    );
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product, this.httpOptions);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + `products/${product.id}`, product, this.httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + `products/${id}`, this.httpOptions);
  }

}
