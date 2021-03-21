import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="isVisible" class="mx-auto">
      <span><i class="fa fa-spinner fa-spin" aria-hidden="true"></i></span>
    </div>
    `,
  styles: ['.fa.fa-spinner { font-size: 64px; } div { width: 64px; }']
})
export class SpinnerComponent {
  @Input() isVisible = false;

  constructor() { }

}
