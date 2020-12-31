import { getPicture } from '../picture';

describe('selectors | picture', () => {
  describe('getPicture', () => {
    it('should get undefined when called with empty state', () => {
      expect(getPicture(undefined)).toBe(undefined);
    });

    it('should get picture', () => {
      const picture = 'picture';
      const state = { picture };
      expect(getPicture(state)).toEqual(picture);
    });
  });
});
