import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getPrivateMessages, getPrivateMessagesByKey } from './selectors/privateMessages';
import { getProfilesById, getPictureByKey, getNameByKey } from './selectors/profile';

export const useBoolean = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  };
};

export const useCarousel = (length, defaultIndex) => {
  const [current, setCurrent] = useState(defaultIndex);

  const isFirst = current === 0;
  const isLast = current === length - 1;

  return {
    current,
    isFirst,
    isLast,
    set: setCurrent,
    reset: () => setCurrent(defaultIndex),
    goPrev: () => setCurrent(isFirst ? length - 1 : current - 1),
    goNext: () => setCurrent(isLast ? 0 : current + 1),
  };
};

export const useInput = (handleSubmit) => {
  const [value, setValue] = useState('');

  return {
    value,
    handleChange: (event) => setValue(event.target.value),
    handleSend: (id) => () => {
      handleSubmit({id, value});
      setValue('');
    },
  };
};

export const usePrivateMessage = () => {
  const [key, setKey] = useState('alexGaulet');
  const { value: open, setTrue: handleClickOpen, setFalse: onClose } = useBoolean();
  const statePrivateMessages = useSelector(getPrivateMessagesByKey(key))

  const handleClickOpenAndUpdateState = (id) => () => {
    setKey(id)
    handleClickOpen()
  }

  return {
    id: key,
    srcUser: useSelector(getPictureByKey(key)),
    nameUser: useSelector(getNameByKey(key)),
    statePrivateMessages,
    handleClickOpenAndUpdateState,
    open,
    onClose,
    profiles: useSelector(getProfilesById(useSelector(getPrivateMessages)))
  };
};