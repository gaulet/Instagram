import { PROFILE } from '../constants';

const initialState = {
  myProfile: undefined,
  otherProfile: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PROFILE.login:
      return { ...action.value };
    default:
      return state;
  }
};
