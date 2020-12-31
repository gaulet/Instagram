import React from 'react';
import { bool, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

import messages from './messages';
import useStyles from './styles';

const UnfollowDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isInXsBreackPoint = useMediaQuery(theme.breakpoints.down('xs'));

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
      fullScreen={isInXsBreackPoint}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <Grid container className={classes.title} alignItems="center" justify="space-evenly" direction="column">
          <img className={classes.profilePicture} src="/img/photoAlex.jpg" alt="profile" />
          <Typography align="center" className={classes.ask}>
            <FormattedMessage {...messages.ask} values={{ name: 'marieg.santos' }} />
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.content} dividers>
        <List disablePadding>
          <ListItem className={classes.listItem} button divider>
            <Typography className={classes.unfollow}>
              <FormattedMessage {...messages.unfollow} />
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} button divider onClick={handleClose}>
            <Typography className={classes.cancel}>
              <FormattedMessage {...messages.cancel} />
            </Typography>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

UnfollowDialog.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
};

export default UnfollowDialog;
