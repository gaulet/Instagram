import { stateProfile } from './dataSimulating/profile';
 
export const setInitialProfile = () => (dispatch) => {
    dispatch(stateProfile);
};
