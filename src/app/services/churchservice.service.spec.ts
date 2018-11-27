import { TestBed } from '@angular/core/testing';

import { ChurchserviceService } from './churchservice.service';

describe('ChurchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChurchserviceService = TestBed.get(ChurchserviceService);
    expect(service).toBeTruthy();
  });
});
