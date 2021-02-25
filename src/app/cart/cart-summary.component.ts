import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent implements OnInit {

  constructor(public cartService: Cart) { }

  ngOnInit(): void {
  }

}
