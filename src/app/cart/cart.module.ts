import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartSummaryComponent, CartDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CartSummaryComponent,
    CartDetailComponent
  ]
})
export class CartModule { }
