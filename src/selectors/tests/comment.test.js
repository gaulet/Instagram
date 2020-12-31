import { getComment } from '../comment';

describe('selectors | comment', () => {
  describe('getComment', () => {
    it('should get undefined when called with empty state', () => {
      expect(getComment(undefined)).toBe(undefined);
    });

    it('should get comment', () => {
      const comment = 'comment';
      const state = { comment };
      expect(getComment(state)).toEqual(comment);
    });
  });
});
