import React from 'react';
import { bool, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

import useStyles from './styles';
import messages from './messages';

const ProfilePictureMenu = ({ open, handleClose }) => {
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
      <DialogTitle>
        <Typography align="center" className={classes.title}>
          <FormattedMessage {...messages.title} />
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.content} dividers>
        <List disablePadding>
          <ListItem className={classes.listItem} button divider>
            <Typography className={classes.upload}>
              <FormattedMessage {...messages.upload} />
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} button divider>
            <Typography className={classes.remove}>
              <FormattedMessage {...messages.remove} />
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

ProfilePictureMenu.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
};

export default ProfilePictureMenu;
