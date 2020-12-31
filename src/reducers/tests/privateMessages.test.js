import reducer from '../privateMessages';

describe('reducers | privateMessages', () => {
  const initialState = {
    id: '66f79',
    message: 'Hello world',
  };

  it('should return the initialState when called with an empty action', () => {
    const action = {};
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
