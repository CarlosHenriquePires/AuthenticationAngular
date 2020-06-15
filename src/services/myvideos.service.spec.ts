import { TestBed } from '@angular/core/testing';

import { MyvideosService } from './myvideos.service';

describe('MyvideosService', () => {
  let service: MyvideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyvideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
