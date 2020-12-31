import { combineReducers } from 'redux';
import theme from '../reducers/theme';
import profile from '../reducers/profile';
import privateMessages from './privateMessages';
import picture from '../reducers/picture';
import like from '../reducers/like';
import comment from '../reducers/comment';

const rootReducer = combineReducers({ theme, profile, privateMessages, picture, like, comment });

export default rootReducer;
