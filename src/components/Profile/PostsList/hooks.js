import { useState } from 'react';

export const useListPicture = (pictures) => {
  const [open, setOpen] = useState(false);
  const [myPictures, setAllPictures] = useState(pictures); // redux
  const [propsZoom, setPropsZoom] = useState({});
  const [like, setLike] = useState();
  const length = myPictures.length;

  const handleClickOpen = (index) => () => {
    if (!(index > length - 1 || index < 0)) {
      setOpen(true);
      setLike(myPictures[index].like);
      setPropsZoom({ ...myPictures[index], index: index });
    }
  };

  const handleLike = (index) => () => {
    // redux
    const newTab = [...myPictures];
    newTab[index].like = !like;

    setLike(!like);
    setAllPictures(newTab);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, propsZoom, handleClickOpen, handleClose, handleLike, like];
};
