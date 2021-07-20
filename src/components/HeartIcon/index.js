import React from 'react';
import { bool, func, string } from 'prop-types';
import classNames from 'classnames';

import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

const HeartIcon = ({ liked, handleLike, className }) => {
  const classes = useStyles();

  return (
    <Grid onClick={handleLike} className={className}>
      <FavoriteIcon
        className={classNames(classes.root, { [classes.iconColorRed]: liked, [classes.iconColorWhite]: !liked })}
      />
    </Grid>
  );
};

HeartIcon.propTypes = {
  liked: bool.isRequired,
  handleLike: func,
  className: string,
};

export default HeartIcon;
