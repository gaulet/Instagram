import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import HeartIcon from '../../../HeartIcon';
import InputCommentary from '../../../InputCommentary';
import Comments from '../Comments';
import { useInputCommentary, useInfoUser } from './hooks';
import messages from './messages';
import CloseIcon from '../../../CloseIcon';
import UsersMenu from '../../../UsersMenu';

const ZoomPicture = ({ liked, handleLike, src, handleClose, open, index, handleClickOpen, likes, myComments = [] }) => {
  const classes = useStyles();
  const [value, handleInputCommentary, handleSendCommentary] = useInputCommentary();
  const [openLikes, handleClickOpenLikes, handleCloseLikes] = useInfoUser();

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
      maxWidth={true}
      open={open}
      onClose={handleClose}
    >
      <Box className={classes.test}>
        {/* test ! */}
        <CloseIcon handleClick={handleClose} />
      </Box>
      <UsersMenu open={openLikes} handleClose={handleCloseLikes} title={'Likes'} />

      <Grid container alignItems="center" wrap="nowrap">
        <ArrowBackIosRoundedIcon className={classes.pointer} fontSize="large" onClick={handleClickOpen(index - 1)} />

        <Grid container alignItems="center" className={classes.root} wrap="nowrap">
          <img className={classes.picture} src={src} alt="imgProfile" />

          <Grid container className={classes.boxCommentary}>
            <Grid container className={classes.headerCommentary} alignItems="center">
              <img className={classes.pictureHeaderBox} src={'/img/photoAlex.jpg'} alt="imgProfile" />
              <Grid className={classes.nameHeaderBox}>{'gauletalexandre'}</Grid>
            </Grid>
            <Grid className={classes.listCommentary}>
              <Comments myComments={myComments} />
            </Grid>
            <Grid container alignItems="center" className={classes.boxIconInCommentary}>
              <HeartIcon liked={liked} handleLike={handleLike(index)} />
              <Grid item className={classes.likes} onClick={handleClickOpenLikes}>
                <FormattedMessage {...messages.likes} values={{ likes: likes }} />
              </Grid>
            </Grid>
            <Grid container className={classes.boxReleaseDate}>
              IL Y A 4 HEURES
            </Grid>
            <Grid container alignItems="center" className={classes.boxWriteCommentary}>
              <InputCommentary
                value={value}
                handleInputCommentary={handleInputCommentary}
                handleSendCommentary={handleSendCommentary}
              />
            </Grid>
          </Grid>
        </Grid>
        <ArrowForwardIosRoundedIcon className={classes.pointer} fontSize="large" onClick={handleClickOpen(index + 1)} />
      </Grid>
    </Dialog>
  );
};

ZoomPicture.propTypes = {
  index: PropTypes.number,
  likes: PropTypes.string,
  liked: PropTypes.bool,
  src: PropTypes.string,
  handleClickOpen: PropTypes.func,
  handleLike: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  myComments: PropTypes.arrayOf(PropTypes.object),
};

export default ZoomPicture;
