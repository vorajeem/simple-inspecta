import { TestBed, inject } from '@angular/core/testing';

import { IqlService } from './iql.service';

describe('IqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IqlService]
    });
  });

  it('should be created', inject([IqlService], (service: IqlService) => {
    expect(service).toBeTruthy();
  }));
});
