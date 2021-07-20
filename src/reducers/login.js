import { LOGIN } from '../constants';

const initialState = {
    login: false 
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN.login:
            return { ...state, login: action.login };
        default: 
         return state
    }
}
