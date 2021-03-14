import { Component, OnInit } from '@angular/core';
import { Order } from '../orders/order.model';
import { OrderService } from '../orders/order.service';

@Component({
  templateUrl: 'order-table.component.html'
})
export class OrderTableComponent implements OnInit {
  orders: Order[] = [];
  includeShipped = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (orders) => this.orders = orders.filter(o => this.includeShipped || !o.isShipped),
      error: (err) => console.error('An error ocurred while getting the orders: ' + err)
    });
  }

  markShipped(order: Order): void {
    order.isShipped = true;
    this.orderService.updateOrder(order).subscribe({
      next: (updatedOrder) => console.log(`Order ${order.id} updated successfully: `, JSON.stringify(updatedOrder)),
      error: (err) => console.error('An error ocurred while updating the order: ' + err)
    });
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe({
      next: (deletedOrder) => console.log(`Order ${id} deleted successfully: `, JSON.stringify(deletedOrder)),
      error: (err) => console.error('An error ocurred while deleting the order: ' + err)
    });
  }
}
