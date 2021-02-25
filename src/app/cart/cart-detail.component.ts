import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: 'cart-detail.component.html',
  styles: ['input { width: 5em }']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
