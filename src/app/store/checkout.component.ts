import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <div>
      <h3 class="bg-info p-1 text-white">Checkout Component</h3>
    </div>`,
  styles: []
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
