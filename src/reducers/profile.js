import { PROFILE } from '../constants';

const initialState = {
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PROFILE.initialStateProfile:
      return { ...action.state }
    default:
      return state;
  }
};
