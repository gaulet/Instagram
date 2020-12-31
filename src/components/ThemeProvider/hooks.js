import { useSelector } from 'react-redux';
import { getTheme } from '../../selectors/theme';

export const useConnect = () => {
  return {
    theme: useSelector(getTheme),
  };
};
