import { useSelector } from 'react-redux';
import { getMyProfile } from '../../selectors/profile';

export const useApp = () => ({
  myProfile: useSelector(getMyProfile),
});
