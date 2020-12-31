import { useSelector } from 'react-redux';
import { getProfilesByKey } from '../../selectors/profile';

export const useUsersMenu = (profiles) => ({
  profiles: useSelector(getProfilesByKey(profiles)),
});
