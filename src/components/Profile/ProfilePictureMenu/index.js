import React from 'react';
import { bool, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

import useStyles from './styles';
import messages from './messages';

const ProfilePictureMenu = ({ handleClose, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isInXsBreakpoint = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          background: theme.palette.primary.dark,
        },
      }}
      fullScreen={isInXsBreakpoint}
      maxWidth="xs"
      fullWidth
      open={open}
      onClose={handleClose}
    >
      <Grid container className={classes.titleContainer} justify="center" alignItems="center">
        <Typography className={classes.title}>
          <FormattedMessage {...messages.title} />
        </Typography>
      </Grid>
      <Grid container className={classes.suggestionContainer} justify="center" alignItems="center">
        <Typography variant="variant1" className={classes.upload}>
          <FormattedMessage {...messages.upload} />
        </Typography>
      </Grid>
      <Grid container className={classes.suggestionContainer} justify="center" alignItems="center">
        <Typography className={classes.remove}>
          <FormattedMessage {...messages.remove} />
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.suggestionContainer}
        justify="center"
        alignItems="center"
        onClick={handleClose}
      >
        <Typography className={classes.cancel}>
          <FormattedMessage {...messages.cancel} />
        </Typography>
      </Grid>
    </Dialog>
  );
};

ProfilePictureMenu.propTypes = {
  handleClose: func.isRequired,
  open: bool.isRequired,
};

export default ProfilePictureMenu;
