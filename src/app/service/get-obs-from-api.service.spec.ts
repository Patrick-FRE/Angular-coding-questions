import { TestBed } from '@angular/core/testing';

import { GetObsFromApiService } from './get-obs-from-api.service';

describe('GetObsFromApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetObsFromApiService = TestBed.get(GetObsFromApiService);
    expect(service).toBeTruthy();
  });
});
