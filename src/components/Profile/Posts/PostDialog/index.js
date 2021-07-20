import React, { useEffect } from 'react';
import { array, func, bool, number } from 'prop-types';
import classNames from 'classnames';

import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForward from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useCarousel } from '../../../../hooks';
import CloseIcon from '../../../CloseIcon';
import Post from '../../../Post';
import useStyles from './styles';

const PostDialog = ({ open, posts, openedPostIndex, handleClose }) => {
  const classes = useStyles();
  const isBreakpointDownSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const {
    isFirst: isFirstPost,
    isLast: isLastPost,
    set: setPost,
    goPrev: goPrevPost,
    goNext: goNextPost,
  } = useCarousel(posts.length);

  // set the carousel to openedPostIndex value
  useEffect(() => {
    setPost(openedPostIndex);
  }, [openedPostIndex, setPost]);

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          width: isBreakpointDownSm ? '100vw' : '80vw',
          margin: 'unset',
          maxWidth: 'unset',
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <>
        <CloseIcon className={classes.closeIcon} handleClick={handleClose} />
        <Grid container justify="space-between" alignItems="center" wrap="nowrap">
          <ArrowBack className={classNames(classes.arrowIcon, { [classes.hide]: isFirstPost })} onClick={goPrevPost} />
          <Post direction="row" img={'/img/marvin.jpg'} />
          <ArrowForward
            className={classNames(classes.arrowIcon, { [classes.hide]: isLastPost })}
            onClick={goNextPost}
          />
        </Grid>
      </>
    </Dialog>
  );
};

PostDialog.propTypes = {
  open: bool.isRequired,
  posts: array.isRequired,
  openedPostIndex: number,
  handleClose: func.isRequired,
};

export default PostDialog;
