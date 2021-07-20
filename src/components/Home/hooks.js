import { useSelector } from 'react-redux';

import { getMyLastName, getMyName, getMyPicture } from '../../selectors/profile';

export const useProfile = () => ({
    myName: useSelector(getMyName),
    myPicture: useSelector(getMyPicture),
    myLastName: useSelector(getMyLastName),
  })