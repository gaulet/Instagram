import { prop } from 'ramda';
import { createSelector } from 'reselect';

const getKey = prop

export const getPrivateMessages = prop('privateMessages');
export const getPrivateMessagesByKey = (id) => createSelector(getPrivateMessages, getKey(id)); // will test!
