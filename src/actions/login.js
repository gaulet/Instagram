import { LOGIN } from '../constants';

export const setLogin = () => (dispatch) => {
    dispatch({ type: LOGIN.login, login: true });
};
