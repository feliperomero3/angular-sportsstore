import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from './product.model';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products;

  getProducts(category: string = null): Observable<Product[]> {
    return from([this.products.filter(p => category == null || category === '' || p.category === category)]);
  }

  getProduct(id: number): Observable<Product> {
    return from([this.products.find(p => p.id === id)]);
  }

  getCategories(): Observable<string[]> {
    return from([this.products.map(p => p.category)
      .filter((c, index, array) => array.indexOf(c) === index).sort()]);
  }

}
