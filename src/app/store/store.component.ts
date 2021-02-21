import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Product[];
  categories: string[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe({
      next: data => this.products = data
    });
  }

  private getCategories(): void {
    this.productService.getCategories().subscribe(data => this.categories = data);
  }

}
