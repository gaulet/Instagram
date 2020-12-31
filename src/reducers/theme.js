import { SET_THEME } from '../actions/theme';
import { THEMES } from '../constants';
import { darkTheme } from '../themes';

const initialState = {
  label: THEMES.dark,
  value: darkTheme,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        value: action.value,
        label: action.label,
      };
    default:
      return state;
  }
};
