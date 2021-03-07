import { TestBed } from '@angular/core/testing';

import { Auth.GuardsService } from './auth.guards.service';

describe('Auth.GuardsService', () => {
  let service: Auth.GuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth.GuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
