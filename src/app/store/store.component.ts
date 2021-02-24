import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {
  products: Product[];
  categories: string[];
  selectedCategory = '';
  productsPerPage = 4;
  selectedPage = 1;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  get pageCount(): number {
    return Math.ceil(this.products.length / this.productsPerPage);
  }

  get paginatedProducts(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    const sliceEnd = pageIndex + this.productsPerPage;
    return this.products.slice(pageIndex, sliceEnd);
  }

  private getProducts(): void {
    this.productService.getProducts(this.selectedCategory).subscribe({
      next: data => {
        this.products = data;
      }
    });
  }

  private getCategories(): void {
    this.productService.getCategories().subscribe(data => this.categories = data);
  }

  changeCategory(category: string = ''): void {
    this.selectedCategory = category;
    this.getProducts();
  }

  changePage(page: number): void {
    this.selectedPage = page;
  }

  changePageSize(size: string): void {
    this.productsPerPage = +size;
    this.changePage(1);
  }

  addProductToCart(product: Product): void {
    this.cartService.addLine(product);
  }

}
