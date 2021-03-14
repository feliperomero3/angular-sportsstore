import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductService } from '../products/product.service';
import { ProductTableComponent } from './product-table.component';

describe('ProductTableComponent', () => {
  let component: ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;
  let mockProductService: any;

  beforeEach(async(() => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getProducts', 'deleteProduct']);

    TestBed.configureTestingModule({
      declarations: [ProductTableComponent],
      providers: [{ provide: ProductService, useValue: mockProductService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    mockProductService.getProducts.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
