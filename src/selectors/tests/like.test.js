import { getLike } from '../like';

describe('selectors | like', () => {
  describe('getLike', () => {
    it('should get undefined when called with empty state', () => {
      expect(getLike(undefined)).toBe(undefined);
    });

    it('should get like', () => {
      const like = 'like';
      const state = { like };
      expect(getLike(state)).toEqual(like);
    });
  });
});
