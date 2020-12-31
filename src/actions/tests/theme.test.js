import mockStore from '../../store/configureStoreTest';
import { setTheme } from '../../actions/theme';
import { SET_THEME } from '../../actions/theme';
import { DARK_THEME, LIGHT_THEME } from '../../constants';
import { lightTheme, darkTheme } from '../../themes';

describe('actions | theme', () => {
  describe('setTheme', () => {
    describe('when called with a state who contain a DARK_THEME label', () => {
      it('should dispatch SET_THEME with a light theme payload', () => {
        const label = DARK_THEME;
        const state = { theme: { label } };
        const expectedActions = [{ type: SET_THEME, label: LIGHT_THEME, value: lightTheme }];
        const { getActions, dispatch } = mockStore(state);
        dispatch(setTheme());
        const dispatchedActions = getActions();
        expect(dispatchedActions).toEqual(expectedActions);
      });
    });

    describe('when called with a state who doest not contain a DARK_THEME label', () => {
      it('should dispatch SET_THEME with a dark theme payload', () => {
        const label = 'peep';
        const state = { theme: { label } };
        const expectedActions = [{ type: SET_THEME, label: DARK_THEME, value: darkTheme }];
        const { getActions, dispatch } = mockStore(state);
        dispatch(setTheme());
        const dispatchedActions = getActions();
        expect(dispatchedActions).toEqual(expectedActions);
      });
    });
  });
});
