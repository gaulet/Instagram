import { prop, omit, pipe, map, filter, propOr, find, propEq, isNil, mapObjIndexed,values } from 'ramda';

import { createSelector } from 'reselect';
import { FOLLOW, FOLLOWING, FOLLOW_AND_FOLLOWING, ME, USER_ACTIONS } from '../constants';

export const getProfile = prop('profile');
export const getStatusF = propOr([], 'statusFollow');
export const getStatus = prop('status');
export const getId = prop('id');
export const getName = prop('name');
export const getPicture = prop('picture');
export const getLastName = prop('lastName');

export const getMyProfile = createSelector(getProfile, prop('myProfile'));

export const getMyProfileStatusF = createSelector(getMyProfile, getStatusF);
export const getMyIdProfile = createSelector(getMyProfile, getId);
export const getMyName = createSelector(getMyProfile, getName);
export const getMyPicture = createSelector(getMyProfile, getPicture);
export const getMyLastName = createSelector(getMyProfile, getLastName);

export const getOtherProfile = createSelector(getProfile, prop('otherProfile'));

export const getProfileByKey = (id) => createSelector(getOtherProfile, prop(id));

export const getPictureByKey = (id) => createSelector(getProfileByKey(id), getPicture); // will test!
export const getNameByKey = (id) => createSelector(getProfileByKey(id), getName); // will test!

export const getByKeyW = (id) => createSelector(getOtherProfile, prop(id));

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

// will test!
export const getProfilesById = (profiles) => (state) => (isNil(profiles) || isNil(state) || typeof profiles !== 'object' || typeof state !== 'object') ? [] :
  pipe(mapObjIndexed((_, key) => pipe(getProfileByKey(key), omit(["statusFollow"]))(state)), values)(profiles)
