import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../../actions/login';
import { getLogin } from '../../../selectors/login';

export const useConnect = () => {
  const dispatch = useDispatch();

  return {
    setLogin: () => dispatch(setLogin()),
    login: useSelector(getLogin),
  };
};
