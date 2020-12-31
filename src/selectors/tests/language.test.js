import { getLocale } from '../language';

describe('web :: selectors :: language', () => {
  describe('getLocale', () => {
    it('should obtain the DEFAULT_LOCALE: en when called with an empty state', () =>
      expect(getLocale(undefined)).toMatch('en'));
    it('should obtain the locale', () => {
      const locale = 'locale';
      const state = { language: { locale } };
      expect(getLocale(state)).toMatch(locale);
    });
  });
});
