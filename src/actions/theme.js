import { getTheme } from '../selectors/theme';
import { THEMES } from '../constants';
import { lightTheme, darkTheme } from '../themes';

export const SET_THEME = 'THEME/SET_THEME';

export const setTheme = () => (dispatch, getState) => {
  const { label } = getTheme(getState());
  label === THEMES.dark
    ? dispatch({ type: SET_THEME, label: THEMES.light, value: lightTheme })
    : dispatch({ type: SET_THEME, label: THEMES.dark, value: darkTheme });
};
