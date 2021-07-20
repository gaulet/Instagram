import { useState } from 'react';

export const useInputCommentary = () => {
  const [value, setvalue] = useState('');
  const handleInputCommentary = (e) => {
    setvalue(e.target.value);
  };
  const handleSendCommentary = () => {
    setvalue('');
    console.log(value);
  };
  return [value, handleInputCommentary, handleSendCommentary];
};

export const useInfoUser = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleClickOpen, handleClose];
};
