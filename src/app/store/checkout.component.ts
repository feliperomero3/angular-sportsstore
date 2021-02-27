import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../orders/order.model';
import { OrderService } from '../orders/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.component.html',
  styles: [`
    input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }
    input.ng-dirty.ng-valid { border: 2px solid #6bc502 }
  `]
})
export class CheckoutComponent implements OnInit {
  orderSent = false;
  orderSubmitted = false;

  constructor(public order: Order, public orderService: OrderService) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm): void {
    this.orderSubmitted = true;
    if (form.valid) {
      this.orderService.saveOrder(this.order).subscribe({
        next: () => {
          this.order.clear();
          this.orderSent = true;
          this.orderSubmitted = false;
        },
        error: () => console.error('An error ocurred during order submission')
      });
    }
  }

}
