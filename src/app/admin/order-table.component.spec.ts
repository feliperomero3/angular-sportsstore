import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { OrderService } from '../orders/order.service';
import { OrderTableComponent } from './order-table.component';

describe('OrderTableComponent', () => {
  let component: OrderTableComponent;
  let fixture: ComponentFixture<OrderTableComponent>;
  let mockOrderService: any;

  beforeEach(async(() => {
    mockOrderService = jasmine.createSpyObj('OrderService', ['getOrders', 'updateOrder', 'deleteOrder']);

    TestBed.configureTestingModule({
      declarations: [OrderTableComponent],
      imports: [FormsModule],
      providers: [{ provide: OrderService, useValue: mockOrderService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTableComponent);
    component = fixture.componentInstance;
    mockOrderService.getOrders.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
