import { TestBed } from '@angular/core/testing';

import { ProductsrandomService } from './productsrandom.service';

describe('ProductsrandomService', () => {
  let service: ProductsrandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsrandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
