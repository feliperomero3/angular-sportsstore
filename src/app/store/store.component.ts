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

  private getProducts(): void {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    this.productService.getProducts(this.selectedCategory).subscribe({
      next: data => {
        this.productsCount = data.length;
        this.products = data.slice(pageIndex, pageIndex + this.productsPerPage);
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
    this.getProducts();
  }

  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    console.log(this.products.length);
    console.log(this.productsCount);

    return Array(Math.ceil(this.productsCount / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

}
