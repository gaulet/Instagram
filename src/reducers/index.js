import { combineReducers } from 'redux';
import theme from '../reducers/theme';
import profile from '../reducers/profile';
import privateMessages from './privateMessages';
import login from '../reducers/login';

const rootReducer = combineReducers({ theme, profile, privateMessages, login });

export default rootReducer;
