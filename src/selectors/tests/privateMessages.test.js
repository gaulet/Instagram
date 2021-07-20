import { getPrivateMessages } from '../privateMessages';

describe('selectors | privateMessages', () => {
  describe('getPrivateMessages', () => {
    it('should get undefined when called with empty state', () => {
      expect(getPrivateMessages(undefined)).toBe(undefined);
    });

    it('should get privateMessages', () => {
      const privateMessages = 'privateMessages';
      const state = { privateMessages };
      expect(getPrivateMessages(state)).toEqual(privateMessages);
    });
  });
});
