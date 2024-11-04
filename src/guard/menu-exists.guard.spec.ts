import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { menuExistsGuard } from './menu-exists.guard';

describe('menuExistsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => menuExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
