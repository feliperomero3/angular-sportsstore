import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getProducts(category: string = null): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products', this.getHttpOptions())
      .pipe(
        map((ps) => {
          return ps.filter((p) => category == null || category === '' || p.category === category);
        })
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'products/' + id, this.getHttpOptions());
  }

  getCategories(): Observable<string[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products', this.getHttpOptions()).pipe(
      map((ps) => ps.map((p) => p.category)),
      map((ps) => ps.filter((c, index, array) => array.indexOf(c) === index).sort())
    );
  }

  saveProduct(product: Product): Observable<Product> {
    console.log('On saveProduct()');
    console.log('httpOptions: ' + JSON.stringify(this.getHttpOptions()));
    return this.http.post<Product>(this.baseUrl + 'products', product, this.getHttpOptions());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + `products/${product.id}`, product, this.getHttpOptions());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + `products/${id}`, this.getHttpOptions());
  }

}
