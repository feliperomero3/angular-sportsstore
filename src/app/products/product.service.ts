import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts(category: string = null): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products', this.httpOptions)
      .pipe(
        map((ps) => {
          return ps.filter((p) => category == null || category === '' || p.category === category);
        }),
        tap((ps) => console.log(ps))
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

}
