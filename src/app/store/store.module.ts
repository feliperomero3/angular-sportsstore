import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CheckoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CartModule,
    SharedModule
  ],
  exports: [
    StoreComponent,
    CheckoutComponent
  ]
})
export class StoreModule { }
