import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class Order {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isShipped = false;

  constructor(public cart: Cart) { }

  clear(): void {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.isShipped = false;
    this.cart.clear();
  }
}
