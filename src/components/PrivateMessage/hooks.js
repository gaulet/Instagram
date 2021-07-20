import { useDispatch, useSelector } from 'react-redux';

import { setSendPrivateMessagesById } from '../../actions/privateMessages';
import { getMyIdProfile } from '../../selectors/profile';

export const usePrivateMessage = () => {
        const dispatch = useDispatch();
        const myId = useSelector(getMyIdProfile)
        return {
        handleSubmit: (value) => dispatch(setSendPrivateMessagesById({...value, myId}))
    }
}