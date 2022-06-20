import { TestBed } from '@angular/core/testing';

import { LogoDesignService } from './logo-design.service';

describe('LogoDesignService', () => {
  let service: LogoDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
