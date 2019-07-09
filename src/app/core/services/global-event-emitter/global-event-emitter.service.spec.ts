import { TestBed } from '@angular/core/testing';

import { GlobalEventEmitterService } from './global-event-emitter.service';

describe('GlobalEventEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalEventEmitterService = TestBed.get(GlobalEventEmitterService);
    expect(service).toBeTruthy();
  });
});
