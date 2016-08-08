import { RouterConfig } from '@angular/router';
import { Login } from './components';
import { SignUp } from './components';

export const routes: RouterConfig = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: SignUp },
  { path: '**',     component: Login },
];
