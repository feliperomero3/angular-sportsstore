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
    console.log(`isEditing: ${this.isEditing}`);

    if (this.isEditing) {
      productService.getProduct(+activeRoute.snapshot.params.id).subscribe({
        next: (product) => this.product = product,
        error: (err) => console.error(err)
      });
    }
  }

  save(form: NgForm): void {
    if (this.product.id == null || this.product.id === 0) {
      this.productService.saveProduct(this.product).subscribe({
        next: p => console.log('Product ' + p.id + ' saved.'),
        error: err => console.error('An error ocurred during while trying to save the Product: ' + err)
      });
    } else {
      this.productService.updateProduct(this.product).subscribe({
        next: p => console.log('Product ' + p.id + ' updated.'),
        error: err => console.error('An error ocurred during while trying to update the Product: ' + err)
      });
    }
    this.router.navigateByUrl('/admin/main/products');
  }
}
