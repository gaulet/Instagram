import React from 'react';
import { string } from 'prop-types';

import useStyles from './styles';
import { useInput } from '../../hooks';

import PostRow from './PostRow';
import PostColumn from './PostColumn';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

const Post = ({ direction }) => {
  const classes = useStyles();
  const likeProps = { liked: true, handleLike: () => {} };
  const { value, handleChange: handleInputCommentary, handleSend: handleSendCommentary } = useInput(window.alert);
  const inputProps = { value, handleInputCommentary, handleSendCommentary };
  const isRow = direction === 'row';
  const isInXsBreakpoint = useMediaQuery(useTheme().breakpoints.down('xs'));
  const Post = isRow && !isInXsBreakpoint ? PostRow : PostColumn;
  const container = isRow && isInXsBreakpoint ? classes.wrapper : undefined;

  return (
    <Box className={container}>
      <Post isRow={!isRow} inputProps={inputProps} likeProps={likeProps} />
    </Box>
  );
};

Post.propTypes = {
  direction: string.isRequired,
};

export default Post;
