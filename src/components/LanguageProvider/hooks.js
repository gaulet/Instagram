import { useSelector } from 'react-redux';
import { getLocale } from '../../selectors/language';

export const useConnect = () => {
  return {
    locale: useSelector(getLocale),
  };
};
