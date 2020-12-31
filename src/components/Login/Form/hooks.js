import { useDispatch } from 'react-redux';
import { setLogin } from '../../../actions/profile';

export const useConnect = () => {
  const dispatch = useDispatch();

  return {
    setLogin: () => dispatch(setLogin()),
  };
};
