import { TestBed } from '@angular/core/testing';

import { JobOfferServiceService } from './job-offer-service.service';

describe('JobOfferServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobOfferServiceService = TestBed.get(JobOfferServiceService);
    expect(service).toBeTruthy();
  });
});
