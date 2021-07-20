import Home from './components/Home';
import Profile from './components/Profile';
import Activity from './components/Activity';
import FriendsMessage from './components/FriendsMessage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

export const HOME_ROUTE_PATH = '/';
export const PROFILE_ROUTE_PATH_ID = '/profile/:id';
export const PROFILE_ROUTE_PATH = '/profile';
export const ACTIVITY_ROUTE_PATH = '/activity';
export const FRIENDS_MESSAGES_ROUTE_PATH = '/messages';
export const LOGIN_ROUTE_PATH = '/login';
export const SIGNUP_ROUTE_PATH = '/signup';
export const FORGOT_PASSWORD_ROUTE_PATH = '/forgot-password';
export const DEFAULT_ROUTE_PATH = LOGIN_ROUTE_PATH;

const routes = [
  {
    path: HOME_ROUTE_PATH,
    component: Home,
    exact: true,
  },
  {
    path: PROFILE_ROUTE_PATH_ID,
    component: Profile,
    exact: true,
  },
  {
    path: ACTIVITY_ROUTE_PATH,
    component: Activity,
    exact: true,
  },
  {
    path: FRIENDS_MESSAGES_ROUTE_PATH,
    component: FriendsMessage,
    exact: true,
  },
  {
    path: LOGIN_ROUTE_PATH,
    component: Login,
    exact: true,
  },
  {
    path: SIGNUP_ROUTE_PATH,
    component: Signup,
    exact: true,
  },
  {
    path: FORGOT_PASSWORD_ROUTE_PATH,
    component: ForgotPassword,
    exact: true,
  },
];

export const routesNotLog = [
  {
    path: LOGIN_ROUTE_PATH,
    component: Login,
    exact: true,
  },
  {
    path: SIGNUP_ROUTE_PATH,
    component: Signup,
    exact: true,
  },
  {
    path: FORGOT_PASSWORD_ROUTE_PATH,
    component: ForgotPassword,
    exact: true,
  },
];

export default Object.freeze(routes);
