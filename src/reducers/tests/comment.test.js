import reducer from '../comment';

describe('reducers | comment', () => {
  const initialState = {
    name: 'Florian',
    id: '66f7',
  };

  it('should return the initialState when called with an empty action', () => {
    const action = {};
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
