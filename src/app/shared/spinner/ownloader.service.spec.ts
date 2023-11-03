/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OwnloaderService } from './ownloader.service';

describe('Service: Ownloader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnloaderService]
    });
  });

  it('should ...', inject([OwnloaderService], (service: OwnloaderService) => {
    expect(service).toBeTruthy();
  }));
});
