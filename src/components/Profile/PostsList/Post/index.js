import React from 'react';
import { string, bool, func } from 'prop-types';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import HeartIcon from '../../../HeartIcon';
import { useBoolean } from '../../../../hooks';
import useStyles from './styles';

const Post = ({ liked, likes, comments, src, handleClick }) => {
  const { value: isMouseOver, setTrue: onMouseOver, setFalse: onMouseOut } = useBoolean(false);
  const classes = useStyles();

  return (
    <Grid className={classes.root} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={handleClick}>
      <img
        className={classNames(classes.picture, { [classes.pictureOnMouseOver]: isMouseOver })}
        src={src}
        alt="post"
      />
      <Grid className={classNames(classes.statsOnMouseOut, { [classes.statsOnMouseOver]: isMouseOver })}>
        <Grid container className={classes.iconsLike}>
          <HeartIcon liked={liked} />
          <Grid item className={classes.numberLike}>
            {likes}
          </Grid>
        </Grid>
        <Grid container className={classes.iconsMessage}>
          <ModeCommentIcon className={classes.iconColorWhite} />
          <Grid item className={classes.numberMessage}>
            {comments}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Post.propTypes = {
  likes: string.isRequired,
  comments: string.isRequired,
  liked: bool.isRequired,
  src: string.isRequired,
  handleClick: func.isRequired,
};

export default Post;
