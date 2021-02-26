import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { StoreGuard } from './store.guard';

describe('StoreGuard', () => {
  let guard: StoreGuard;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(StoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
