import { prop, omit, pipe, map, filter, propOr, find, propEq, isNil } from 'ramda';

import { createSelector } from 'reselect';
import { FOLLOW, FOLLOWING, FOLLOW_AND_FOLLOWING, ME, USER_ACTIONS } from '../constants';

export const getProfile = prop('profile');
export const getStatusF = propOr([], 'statusFollow');
export const getStatus = prop('status');
export const getId = prop('id');

export const getMyProfile = createSelector(getProfile, prop('myProfile'));
export const getMyProfileStatusF = createSelector(getMyProfile, getStatusF);
export const getMyIdProfile = createSelector(getMyProfile, getId);

export const getOtherProfile = createSelector(getProfile, prop('otherProfile'));

export const getProfileByKey = (id) => createSelector(getOtherProfile, prop(id));

export const profileFollow = (isFollow, isFollowing) => (profile) => ({
  ...omit(['statusFollow'], profile),
  followers: filter(isFollow, getStatusF(profile)),
  following: filter(isFollowing, getStatusF(profile)),
});

export const isFollow = (value) => (data) =>
  FOLLOW_AND_FOLLOWING === getStatus(data) ||
  (value === getStatus(data) && value !== undefined && getStatus(data) !== undefined);

export const getProfileFollow = (key) =>
  createSelector(getProfileByKey(key), getMyIdProfile, (profile, myId) =>
    profile
      ? {
          myId,
          ...profileFollow(isFollow(FOLLOW), isFollow(FOLLOWING))(profile),
        }
      : {},
  );

export const statusBtn = (myObjProfile) => {
  switch (myObjProfile) {
    case ME:
      return USER_ACTIONS.me;
    case FOLLOW_AND_FOLLOWING:
      return USER_ACTIONS.following;
    case FOLLOWING:
      return USER_ACTIONS.following;
    default:
      return USER_ACTIONS.follow;
  }
};

export const initStatusBtn = (idProfile, myStatusF) =>
  pipe(find(propEq('id', idProfile)), getStatus, statusBtn)(myStatusF);

export const newProfile = (statusButton) => (profile) => ({
  ...omit(['statusFollow'])(profile),
  statusButton,
});

export const getProfilesByKey = (profiles) => (state) =>
  isNil(profiles) || isNil(state) || typeof profiles !== 'object' || typeof state !== 'object'
    ? []
    : map(
        (profile) =>
          pipe(
            getProfileByKey(getId(profile)),
            newProfile(initStatusBtn(getId(profile), pipe(getMyProfile, getStatusF)(state))),
          )(state),
        profiles,
      );
