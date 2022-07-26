import { TestBed } from '@angular/core/testing';

import { HttprequestsService } from './httprequests.service';

describe('HttprequestsService', () => {
  let service: HttprequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttprequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
