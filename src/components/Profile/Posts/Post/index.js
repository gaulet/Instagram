import React from 'react';
import { string, bool, func } from 'prop-types';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/ModeComment';

import HeartIcon from '../../../HeartIcon';
import { useBoolean } from '../../../../hooks';
import useStyles from './styles';

const Post = ({ picture, liked, likesNb, commentsNb, handleClick }) => {
  const { value: isMouseOver, setTrue: onMouseOver, setFalse: onMouseOut } = useBoolean();
  const classes = useStyles();

  return (
    <Box className={classes.root} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={handleClick}>
      <img
        className={classNames(classes.picture, { [classes.pictureOnMouseOver]: isMouseOver })}
        src={picture}
        alt="post"
      />
      <Box className={classNames(classes.stats, { [classes.statsOnMouseOver]: isMouseOver })}>
        <Grid container className={classes.likesSection}>
          <HeartIcon liked={liked} />
          <Typography className={classes.likesNb}>{likesNb}</Typography>
        </Grid>
        <Grid container className={classes.commentsSection}>
          <CommentIcon className={classes.iconColor} />
          <Typography className={classes.commentsNb}>{commentsNb}</Typography>
        </Grid>
      </Box>
    </Box>
  );
};

Post.propTypes = {
  picture: string.isRequired,
  liked: bool.isRequired,
  likesNb: string.isRequired,
  commentsNb: string.isRequired,
  handleClick: func.isRequired,
};

export default Post;
