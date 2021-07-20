import reducer from '../theme';
import { SET_THEME } from '../../actions/theme';

describe('reducers | theme', () => {
  const initialState = {
    foo: 'bar',
    peep: '667',
  };

  it('should return the initialState when called with an empty action', () => {
    const action = {};
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it('should handle SET_THEME', () => {
    const label = 'peep';
    const value = 42;
    const action = { type: SET_THEME, label, value };
    const expectedState = {
      ...initialState,
      label,
      value,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
