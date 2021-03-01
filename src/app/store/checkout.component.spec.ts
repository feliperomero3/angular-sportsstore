import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../orders/order.service';
import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let mockOrderService: any;

  beforeEach(async(() => {
    mockOrderService = jasmine.createSpyObj('OrderService', ['saveOrder']);

    TestBed.configureTestingModule({
      declarations: [
        CheckoutComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: OrderService, useValue: mockOrderService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
