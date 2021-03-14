import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Component({
  templateUrl: 'product-editor.component.html'
})
export class ProductEditorComponent {
  isEditing = false;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.isEditing = activeRoute.snapshot.params.mode === 'edit';
    if (this.isEditing) {
      Object.assign(this.product,
        productService.getProduct(+activeRoute.snapshot.params.id));
    }
  }

  save(form: NgForm): void {
    this.productService.saveProduct(this.product).subscribe({
      next: p => console.error('Product ' + p.id + 'saved.')
    });
    this.router.navigateByUrl('/admin/main/products');
  }
}
