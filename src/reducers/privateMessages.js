import { PRIVATEMESSAGES } from '../constants';

const putNewMessageById = (state, id, message, isMe) => ({...state, [id]: [ ...state[id], {isMe, message} ]})

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PRIVATEMESSAGES.initialStatePrivateMessages:
      return { ...action.state }
    case PRIVATEMESSAGES.putNewMessageById:
      return putNewMessageById(state, action.id, action.value, action.isMe)
    default:
      return state;
  }
};
