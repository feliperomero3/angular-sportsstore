import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductModule } from '../products/product.module';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProductModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
