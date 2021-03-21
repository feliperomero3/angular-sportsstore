import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Cart } from '../cart/cart.model';
import { ProductService } from '../products/product.service';
import { CounterDirective } from './counter.directive';
import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let mockProductService: any;
  let mockCart: any;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  @Component({ selector: 'app-cart-summary', template: '' })
  class CartSummaryStubComponent { }

  @Component({ selector: 'app-spinner', template: '' })
  class SpinnerStubComponent { }

  beforeEach(async(() => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getProducts', 'getCategories']);
    mockCart = jasmine.createSpyObj('Cart', ['addLine']);

    TestBed.configureTestingModule({
      declarations: [
        StoreComponent,
        CounterDirective,
        CartSummaryStubComponent,
        SpinnerStubComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ProductService, useValue: mockProductService },
        { provide: Cart, useValue: mockCart }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    mockProductService.getProducts.and.returnValue(of([]));
    mockProductService.getCategories.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create the store', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('SPORTS STORE');
  });
});
