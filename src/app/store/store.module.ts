import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductModule } from '../products/product.module';
import { CounterDirective } from './counter.directive';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProductModule,
    CartModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
