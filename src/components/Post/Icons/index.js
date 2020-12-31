import React from 'react';

import HeartIcon from '../../HeartIcon';
import useStyles from './styles';

import CommentIcon from '@material-ui/icons/ModeComment';
import Grid from '@material-ui/core/Grid';

const Icons = ({ isRow = false }) => {
  const classes = useStyles();

  return isRow ? (
    <>
      <HeartIcon liked className={classes.root} />
      <CommentIcon className={classes.root} />
    </>
  ) : (
    <Grid container className={classes.icons}>
      <HeartIcon liked className={classes.root} />
      <CommentIcon />
    </Grid>
  );
};

export default Icons;
