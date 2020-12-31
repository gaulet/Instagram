import React from 'react';
import { func, bool, string } from 'prop-types';
import { map } from 'ramda';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import UserActionButton from '../UserActionButton';
import UserPanel from '../UserPanel';
import CloseIcon from '../CloseIcon';
import useStyles from './styles';
import { useUsersMenu } from './hooks';

const Header = ({ title, handleClose }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.header} container justify="space-between" alignItems="center">
      <Box />
      <Typography className={classes.title}>{title}</Typography>
      <CloseIcon handleClick={handleClose} />
    </Grid>
  );
};

Header.propTypes = {
  title: string,
  handleClose: func.isRequired,
};

const UsersMenu = ({ open, handleClose, title, withoutStatusButton, profiles: usersProfile }) => {
  const classes = useStyles();
  const { profiles } = useUsersMenu(usersProfile);
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
      <DialogTitle className={classes.dialogTitle}>
        <Header title={title} handleClose={handleClose} />
      </DialogTitle>
      <DialogContent className={classes.usersList} dividers>
        {map(({ id, name, lastName, picture, statusButton }) => (
          <UserPanel
            className={classes.user}
            key={id}
            src={picture}
            userName={name + lastName}
            subText={name}
            endAdornment={withoutStatusButton ? null : <UserActionButton action={statusButton} size="small" />}
          />
        ))(profiles)}
      </DialogContent>
    </Dialog>
  );
};

UsersMenu.propTypes = {
  handleClose: func.isRequired,
  open: bool.isRequired,
  withoutStatusButton: bool,
  title: string,
  handleClick: func,
};

export default UsersMenu;
