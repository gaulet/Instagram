import { useSelector } from 'react-redux';
import { getProfileFollow, getProfilesByKey } from '../../selectors/profile';

const profilesSend = [{ id: 'marvinGaulet' }, { id: 'gauletAlex' }];

export const useProfile = (key) => ({
  profile: useSelector(getProfileFollow(key)),
  test: useSelector(getProfilesByKey(profilesSend)),
});
