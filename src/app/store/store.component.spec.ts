import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CounterDirective } from './counter.directive';
import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  @Component({ selector: 'app-cart-summary', template: '' })
  class CartSummaryStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StoreComponent,
        CounterDirective,
        CartSummaryStubComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
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
