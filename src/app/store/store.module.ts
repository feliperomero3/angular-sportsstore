import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../products/product.module';
import { CartModule } from '../cart/cart.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CheckoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ProductModule,
    CartModule,
    SharedModule
  ],
  exports: [
    StoreComponent,
    CheckoutComponent
  ]
})
export class StoreModule { }
