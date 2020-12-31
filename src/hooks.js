import { useState } from 'react';

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
    handleSend: () => {
      handleSubmit(value);
      setValue('');
    },
  };
};
