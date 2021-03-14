import { Component } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: 'product-table.component.html'
})
export class ProductTableComponent {
  private products: Product[] = [];

  constructor(private productService: ProductService) { }

  getProducts(): Product[] {
    this.productService.getProducts().subscribe({
      next: data => this.products = data
    });
    return this.products;
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: (product) => console.error('Deleted Product: ' + product)
    });
  }
}
