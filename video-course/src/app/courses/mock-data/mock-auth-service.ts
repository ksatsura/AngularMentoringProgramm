import { AuthenticationService } from '../../login-modal/authentication.service';

export class MockAuthService extends AuthenticationService {
  logIn: () => Promise<any>
  logOff: () => {}
  isAuthenticated: () => true
  getUserInfo: () => Promise<any>
};
