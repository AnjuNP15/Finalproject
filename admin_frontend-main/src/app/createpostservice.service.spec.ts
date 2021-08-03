import { TestBed } from '@angular/core/testing';

import { CreatepostserviceService } from './createpostservice.service';

describe('CreatepostserviceService', () => {
  let service: CreatepostserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatepostserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
