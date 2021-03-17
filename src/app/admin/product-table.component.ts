import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: 'product-table.component.html'
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
        console.log('Got ' + this.products.length + ' Products');
      },
      error: err => console.error('An error ocurred while trying to get the Products: ' + err)
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: (product) => {
        this.products = this.products.filter((p) => p.id !== id);
        console.log('Deleted Product: ' + product);
      },
      error: err => console.error('An error ocurred while trying to delete the Product: ' + err)
    });
  }
}
