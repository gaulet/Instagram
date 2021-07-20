import { createSelector } from 'reselect';
import { prop } from 'ramda';

const getStateLogin = prop('login')

export const getLogin = createSelector(getStateLogin, prop('login'))