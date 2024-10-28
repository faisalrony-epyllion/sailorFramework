import { TestBed } from '@angular/core/testing';

import { ScmServiceService } from './scm-service.service';

describe('ScmServiceService', () => {
  let service: ScmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
