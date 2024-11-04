import { CanActivateFn } from '@angular/router';

export const menuExistsGuard: CanActivateFn = (route, state) => {
  return true;
};
