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
  isOrderSent = false;
  isOrderSubmitted = false;

  constructor(public order: Order, public orderService: OrderService) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm): void {
    this.isOrderSubmitted = true;
    if (form.valid) {
      this.orderService.saveOrder(this.order).subscribe({
        next: () => {
          this.order.clear();
          this.isOrderSent = true;
          this.isOrderSubmitted = false;
        },
        error: (err) => console.error('An error ocurred during order submission: ' + err)
      });
    }
  }

}
