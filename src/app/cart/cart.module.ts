import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';

@NgModule({
  declarations: [CartSummaryComponent, CartDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CartSummaryComponent,
    CartDetailComponent
  ]
})
export class CartModule { }
