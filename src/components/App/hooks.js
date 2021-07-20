import { useSelector,useDispatch } from 'react-redux';

import { getLogin } from '../../selectors/login';
import { setInitialProfile } from '../../actions/profile';
import { setInitialPrivateMessages } from '../../actions/privateMessages';

export const useApp = () => {
  const dispatch = useDispatch();

  dispatch(setInitialProfile())
  dispatch(setInitialPrivateMessages())
  return {
    login: useSelector(getLogin),
  };
};