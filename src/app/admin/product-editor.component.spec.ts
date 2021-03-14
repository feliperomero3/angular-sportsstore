import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products/product.service';
import { ProductEditorComponent } from './product-editor.component';

describe('ProductEditorComponent', () => {
  let component: ProductEditorComponent;
  let fixture: ComponentFixture<ProductEditorComponent>;
  let mockProductService: any;

  beforeEach(async(() => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getProducts', 'deleteProduct']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const activatedRouteSpy = {
      snapshot: {
        params: {
          mode: 'create'
        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [ProductEditorComponent],
      imports: [FormsModule],
      providers: [
        { provide: ProductService, useValue: mockProductService },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
