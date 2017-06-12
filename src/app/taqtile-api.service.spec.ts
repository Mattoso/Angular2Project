import { TestBed, inject } from '@angular/core/testing';

import { TaqtileApiService } from './taqtile-api.service';

describe('TaqtileApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaqtileApiService]
    });
  });

  it('should be created', inject([TaqtileApiService], (service: TaqtileApiService) => {
    expect(service).toBeTruthy();
  }));
});
