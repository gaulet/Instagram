import { statePrivateMessages } from './dataSimulating/privateMessages';
import { PRIVATEMESSAGES } from "../constants"

export const setInitialPrivateMessages = () => (dispatch) => {
    dispatch(statePrivateMessages);
};

export const setSendPrivateMessagesById = ({id, myId, value}) => (dispatch) => {
    dispatch({type: PRIVATEMESSAGES.putNewMessageById, id, value, isMe: !(id === myId) });
};