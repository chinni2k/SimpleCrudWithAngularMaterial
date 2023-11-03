/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvalidUrlGuardService } from './InvalidUrlGuard.service';

describe('Service: InvalidUrlGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvalidUrlGuardService]
    });
  });

  it('should ...', inject([InvalidUrlGuardService], (service: InvalidUrlGuardService) => {
    expect(service).toBeTruthy();
  }));
});
