import React from 'react';
import { bool, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import useStyles from './styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const UnfollowDialog = ({ open, onClose }) => {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          background: theme.palette.primary.dark,
        },
      }}
      fullWidth
      maxWidth="xs"
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
    >
      <Grid container className={classes.root} alignItems="center" justify="space-evenly" direction="column">
        <img className={classes.profilePicture} src="/img/photoAlex.jpg" alt="profile" />
        <Typography className={classes.ask}>
          <FormattedMessage {...messages.ask} values={{ name: 'marieg.santos' }} />
        </Typography>
      </Grid>
      <Grid container className={classes.suggestion} alignItems="center" justify="center">
        <Typography className={classes.unfollow}>
          <FormattedMessage {...messages.unfollow} />
        </Typography>
      </Grid>
      <Grid container className={classes.suggestion} alignItems="center" justify="center" onClick={onClose}>
        <Typography className={classes.cancel}>
          <FormattedMessage {...messages.cancel} />
        </Typography>
      </Grid>
    </Dialog>
  );
};

UnfollowDialog.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired,
};

export default UnfollowDialog;
