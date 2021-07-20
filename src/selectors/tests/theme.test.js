import { getTheme } from '../theme';

describe('selectors | theme', () => {
  describe('getTheme', () => {
    it('should get undefined when called with empty state', () => {
      expect(getTheme(undefined)).toBe(undefined);
    });

    it('should get theme', () => {
      const theme = 'theme';
      const state = { theme };
      expect(getTheme(state)).toEqual(theme);
    });
  });
});
