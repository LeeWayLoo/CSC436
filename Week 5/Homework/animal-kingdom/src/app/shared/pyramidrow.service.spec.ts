import { TestBed, inject } from '@angular/core/testing';

import { PyramidrowService } from './pyramidrow.service';

describe('PyramidrowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PyramidrowService]
    });
  });

  it('should ...', inject([PyramidrowService], (service: PyramidrowService) => {
    expect(service).toBeTruthy();
  }));
});
