import {
  getProfile,
  getStatusF,
  getStatus,
  getId,
  getMyProfile,
  getMyProfileStatusF,
  getMyIdProfile,
  getOtherProfile,
  getProfileByKey,
  profileFollow,
  getProfileFollow,
  isFollow,
  getProfilesByKey,
  statusBtn,
  newProfile,
  initStatusBtn,
} from '../profile';

import { FOLLOW, FOLLOWING, FOLLOW_AND_FOLLOWING, ME, USER_ACTIONS } from '../../constants';

describe('selectors | profile', () => {
  describe('getProfile', () => {
    it('should get undefined when called with empty state', () => {
      expect(getProfile(undefined)).toBe(undefined);
    });

    it('should get profile', () => {
      const profile = 'profile';
      const state = { profile };
      expect(getProfile(state)).toEqual(profile);
    });
  });

  describe('getStatusF', () => {
    it('should get [] when called with empty state', () => {
      expect(getStatusF(undefined)).toEqual([]);
    });

    it('should get statusFollow', () => {
      const statusFollow = 'statusF';
      const state = { statusFollow };
      expect(getStatusF(state)).toEqual(statusFollow);
    });
  });

  describe('getStatus', () => {
    it('should get undefined when called with empty state', () => {
      expect(getStatus(undefined)).toBe(undefined);
    });

    it('should get status', () => {
      const status = 'status';
      const state = { status };
      expect(getStatus(state)).toEqual(status);
    });
  });

  describe('getId', () => {
    it('should get undefined when called with empty state', () => {
      expect(getId(undefined)).toBe(undefined);
    });

    it('should get id', () => {
      const id = 'id';
      const state = { id };
      expect(getId(state)).toEqual(id);
    });
  });

  describe('getOtherProfile', () => {
    const otherProfile = 'otherProfile';
    const profile = { otherProfile };
    const state = { profile };

    it('should get undefined when called with empty state', () => {
      expect(getOtherProfile(undefined)).toBe(undefined);
    });

    it('should get otherProfile', () => {
      expect(getOtherProfile(state)).toEqual(otherProfile);
    });
  });

  describe('getMyProfile', () => {
    const myProfile = 'myProfile';
    const profile = { myProfile };
    const state = { profile };

    it('should get undefined when called with empty state', () => {
      expect(getMyProfile(undefined)).toBe(undefined);
    });

    it('should get myProfile', () => {
      expect(getMyProfile(state)).toEqual(myProfile);
    });
  });

  describe('getMyProfileStatusF', () => {
    const statusFollow = 'statusFollow';
    const myProfile = { statusFollow };
    const profile = { myProfile };
    const state = { profile };

    it('should get undefined when called with empty state', () => {
      expect(getMyProfileStatusF(undefined)).toEqual([]);
    });

    it('should get statusFollow', () => {
      expect(getMyProfileStatusF(state)).toEqual(statusFollow);
    });
  });

  describe('getMyIdProfile', () => {
    const id = 'id';
    const myProfile = { id };
    const profile = { myProfile };
    const state = { profile };

    it('should get undefined when called with empty state', () => {
      expect(getMyIdProfile(undefined)).toBe(undefined);
    });

    it('should get id', () => {
      expect(getMyIdProfile(state)).toEqual(id);
    });
  });

  describe('getProfileByKey', () => {
    const flo = 'flo';
    const marvin = 'marvin';

    const profile = { otherProfile: { flo, marvin } };
    const state = { profile };
    it('should get undefined when called with empty key and false key', () => {
      expect(getProfileByKey(undefined)(state)).toBe(undefined);
    });
    it('should get undefined when called with empty key and false key', () => {
      expect(getProfileByKey('alex')(state)).toBe(undefined);
    });

    it('should get profile by key flo ', () => {
      expect(getProfileByKey('flo')(state)).toEqual(flo);
    });
    it('should get profile by key marvin', () => {
      expect(getProfileByKey('marvin')(state)).toEqual(marvin);
    });
  });

  describe('isFollow', () => {
    it('should get a value and compare with data', () => {
      const data = { status: FOLLOW };
      const data2 = { status: FOLLOWING };
      const data3 = { status: FOLLOW_AND_FOLLOWING };

      expect(isFollow(FOLLOW)(data)).toBe(true);
      expect(isFollow(FOLLOW)(data3)).toBe(true);

      expect(isFollow(FOLLOW)(data2)).toBe(false);

      expect(isFollow(FOLLOWING)(data)).toBe(false);
      expect(isFollow(FOLLOWING)(data3)).toBe(true);

      expect(isFollow(FOLLOWING)(data2)).toBe(true);
      expect(isFollow(undefined)(data)).toBe(false);
    });
    it('should get false when called with empty data', () => {
      const data = {};

      expect(isFollow('marvin')(data)).toBe(false);
      expect(isFollow(undefined)(data)).toBe(false);
    });
  });

  describe('profileFollow', () => {
    const marvinGaulet = { id: 'marvinGaulet', status: FOLLOW_AND_FOLLOWING };
    const gauletAlex = { id: 'gauletAlex', status: FOLLOW };

    const floChanal = {
      statusFollow: [marvinGaulet, gauletAlex],
    };

    const newFloChanal = {
      followers: [marvinGaulet, gauletAlex],
      following: [marvinGaulet],
    };

    it('should get new data formated with follow and following', () => {
      expect(profileFollow(isFollow(FOLLOW), isFollow(FOLLOWING))(floChanal)).toEqual(newFloChanal);
    });
  });

  describe('getProfileFollow', () => {
    const marvinGaulet = { id: 'marvinGaulet', status: FOLLOW_AND_FOLLOWING };
    const gauletAlex = { id: 'gauletAlex', status: FOLLOW };

    const floChanal = {
      id: 'floChanal',
      name: 'flo',
      lastName: 'chanal',
      picture: '/img/fchanal.jpg',
      statusFollow: [marvinGaulet, gauletAlex],
    };
    const profile = { myProfile: gauletAlex, otherProfile: { marvinGaulet, floChanal } };

    const newFloChanal = {
      myId: 'gauletAlex',
      id: 'floChanal',
      name: 'flo',
      lastName: 'chanal',
      picture: '/img/fchanal.jpg',

      followers: [marvinGaulet, gauletAlex],
      following: [marvinGaulet],
    };

    const state = { profile };

    it('should get new data formated with follow and following', () => {
      expect(getProfileFollow('floChanal')(state)).toEqual(newFloChanal);
    });

    it('should get {} when called with empty key and false key', () => {
      expect(getProfileFollow('floChanalLL')(state)).toEqual({});
      expect(getProfileFollow(undefined)(state)).toEqual({});
    });
  });

  describe('getProfilesByKey', () => {
    const profilesSend = [
      { id: 'marvinGaulet', status: FOLLOW_AND_FOLLOWING },
      { id: 'floChanal', status: FOLLOW },
      { id: 'gauletAlex', status: FOLLOW },
    ];
    const marvinGaulet = {
      id: 'marvinGaulet',
      name: 'marvin',
      lastName: 'gaulet',
      picture: '/img/marvin.jpg',
      statusFollow: '10',
    };
    const gauletAlex = {
      id: 'gauletAlex',
      name: 'alexandre',
      lastName: 'gaulet',
      picture: '/img/alex.jpg',
      statusFollow: [
        { id: 'gauletAlex', status: ME },
        { id: 'marvinGaulet', status: FOLLOW },
        { id: 'floChanal', status: FOLLOW_AND_FOLLOWING },
      ],
    };
    const floChanal = {
      id: 'floChanal',
      name: 'flo',
      lastName: 'chanal',
      picture: '/img/fchanal.jpg',
      statusFollow: '10',
    };

    const profile = { myProfile: gauletAlex, otherProfile: { marvinGaulet, floChanal, gauletAlex } };

    const newProfilesSend = [
      {
        id: 'marvinGaulet',
        name: 'marvin',
        lastName: 'gaulet',
        picture: '/img/marvin.jpg',
        statusButton: USER_ACTIONS.follow,
      },
      {
        id: 'floChanal',
        name: 'flo',
        lastName: 'chanal',
        picture: '/img/fchanal.jpg',
        statusButton: USER_ACTIONS.following,
      },
      {
        id: 'gauletAlex',
        name: 'alexandre',
        lastName: 'gaulet',
        picture: '/img/alex.jpg',
        statusButton: USER_ACTIONS.me,
      },
    ];

    const state = { profile };

    it('should get new data formated with follow and following', () => {
      expect(getProfilesByKey(profilesSend)(state)).toEqual(newProfilesSend);
    });
    it('should get [] with (undefined)(state)', () => {
      expect(getProfilesByKey(undefined)(state)).toEqual([]);
    });
    it('should get []', () => {
      expect(getProfilesByKey(profilesSend)(undefined)).toEqual([]);
    });
    it('should get []', () => {
      expect(getProfilesByKey(profilesSend)(3)).toEqual([]);
    });
    it('should get []', () => {
      expect(getProfilesByKey('alex')(state)).toEqual([]);
    });
  });

  describe('statusBtn', () => {
    it('should get string "me-user-action" ', () => {
      expect(statusBtn(ME)).toEqual(USER_ACTIONS.me);
    });
    it('should get string "following-user-action" ', () => {
      expect(statusBtn(FOLLOW_AND_FOLLOWING)).toEqual(USER_ACTIONS.following);
    });
    it('should get string "following-user-action" ', () => {
      expect(statusBtn(FOLLOWING)).toEqual(USER_ACTIONS.following);
    });
    it('should get string "follow-user-action" ', () => {
      expect(statusBtn('')).toEqual(USER_ACTIONS.follow);
    });
    it('should get string "follow-user-action" ', () => {
      expect(statusBtn()).toEqual(USER_ACTIONS.follow);
    });
  });

  describe('newProfile', () => {
    it('should get an object and implement the element', () => {
      expect(newProfile('alex')({})).toEqual({ statusButton: 'alex' });
    });

    it('should get an object and implement the element without statusFollow', () => {
      expect(newProfile('alex')({ statusFollow: 1 })).toEqual({ statusButton: 'alex' });
    });

    it('should get an object and implement the element without statusFollow', () => {
      expect(newProfile(undefined)(undefined)).toEqual({ statusButton: undefined });
    });
  });

  describe('initStatusBtn', () => {
    const myStatusFollow = [
      { id: 'alexGaulet', status: ME },
      { id: 'floChanal', status: FOLLOWING },
      { id: 'toto', status: FOLLOW_AND_FOLLOWING },
      { id: 'marvinGaulet', status: FOLLOW },
    ];

    it('should get status me-user-action', () => {
      expect(initStatusBtn('alexGaulet', myStatusFollow)).toEqual(USER_ACTIONS.me);
    });
    it('should get status following-user-action', () => {
      expect(initStatusBtn('floChanal', myStatusFollow)).toEqual(USER_ACTIONS.following);
    });
    it('should get status following-user-action', () => {
      expect(initStatusBtn('floChanal', myStatusFollow)).toEqual(USER_ACTIONS.following);
    });
    it('should get status follow-user-action', () => {
      expect(initStatusBtn('marvinGaulet', myStatusFollow)).toEqual(USER_ACTIONS.follow);
    });
    it('should get status follow-user-action', () => {
      expect(initStatusBtn('unknown', myStatusFollow)).toEqual(USER_ACTIONS.follow);
    });
    it('should get status follow-user-action', () => {
      expect(initStatusBtn(123, myStatusFollow)).toEqual(USER_ACTIONS.follow);
    });
  });
});
