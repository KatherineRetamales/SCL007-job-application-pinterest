import { TestBed } from '@angular/core/testing';

import { PhonoService } from './phono.service';

describe('PhonoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonoService = TestBed.get(PhonoService);
    expect(service).toBeTruthy();
  });
});
