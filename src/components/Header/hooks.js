import { useDispatch } from 'react-redux';
import { setTheme } from '../../actions/theme';

export const useConnect = () => {
  const dispatch = useDispatch();

  return {
    setTheme: () => dispatch(setTheme()),
  };
};
