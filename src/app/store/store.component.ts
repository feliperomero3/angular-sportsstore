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
  selectedCategory = '';
  productsPerPage = 4;
  selectedPage = 1;
  productsCount = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  get paginatedProducts(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    console.log('productsPerPage: ', this.productsPerPage);
    console.log('pageIndex (start): ', pageIndex);
    const sliceEnd = pageIndex + this.productsPerPage;
    console.log('end: ', sliceEnd);
    return this.products.slice(pageIndex, sliceEnd);
  }

  private getProducts(): void {
    this.productService.getProducts(this.selectedCategory).subscribe({
      next: data => {
        this.productsCount = data.length;
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

  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize(size: string) {
    this.productsPerPage = +size;
    console.log('productsPerPage: ', this.productsPerPage);

    this.changePage(1);
  }

  get pageNumbers(): number[] {
    console.log(this.products.length);
    console.log(this.productsCount);

    return Array(Math.ceil(this.productsCount / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

}
