import { useSelector } from 'react-redux';
import { getProfileFollow } from '../../selectors/profile';

export const useProfile = (key) => ({
  profile: useSelector(getProfileFollow(key)),
});
