import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/Person';
import AddPictureIcon from '@material-ui/icons/AddToPhotos';
import MessagesIcon from '@material-ui/icons/Send';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';

import { HOME_ROUTE_PATH, PROFILE_ROUTE_PATH, ACTIVITY_ROUTE_PATH, FRIENDS_MESSAGES_ROUTE_PATH } from '../../routes';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="space-between" wrap="nowrap" alignItems="center">
      <IconButton component={Link} to={HOME_ROUTE_PATH}>
        <HomeIcon />
      </IconButton>
      <IconButton component={Link} to={ACTIVITY_ROUTE_PATH}>
        <FavoriteIcon />
      </IconButton>
      <IconButton>
        <AddPictureIcon />
      </IconButton>
      <IconButton component={Link} to={FRIENDS_MESSAGES_ROUTE_PATH}>
        <MessagesIcon />
      </IconButton>
      <IconButton component={Link} to={PROFILE_ROUTE_PATH + '/floChanal'}>
        <ProfileIcon />
      </IconButton>
    </Grid>
  );
};

export default Footer;
