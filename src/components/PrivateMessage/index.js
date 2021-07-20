import React from 'react';

import { func, bool, object, array, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import GoBackIcon from '../GoBackIcon';

import InputCommentary from '../InputCommentary';
import useStyles from './styles';
import Messages from '../Messages';
import messages from './messages';
import { useInput } from '../../hooks';
import { usePrivateMessage } from './hooks';

const TypographyHeader = ({ className, title }) => (
  <Typography className={className}>
    <FormattedMessage {...messages.friendName} values={{ friendName: title }} />
  </Typography>
);

TypographyHeader.prototype = {
  className: object.isRequired,
};

const Header = ({ onClose, title}) => {
  const classes = useStyles();

  return (
    <DialogTitle>
      <Grid container className={classes.header} spacing={1} justify="flex-start" alignItems="center">
        <GoBackIcon handleClick={onClose} className={classes.goBackIcon} />
        <Grid container justify="center" alignItems="center" className={classes.boxTitle}>
          <TypographyHeader className={classes.title} title={title} />
        </Grid>
      </Grid>
    </DialogTitle>
  );
};

Header.prototype = {
  onClose: func.isRequired,
  title: string
};

const PrivateMessage = ({id, open, onClose, privateMessages, srcUser, title}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const { handleSubmit } = usePrivateMessage()
  const { value, handleChange: handleInputCommentary, handleSend: handleSendCommentary } = useInput(handleSubmit);
  const inputProps = { value, handleInputCommentary, handleSendCommentary: handleSendCommentary(id) };

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          background: theme.palette.primary.dark,
          minHeight: "80%"
        },
      }}
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
    >
      <Header onClose={onClose} title={title} />
      <DialogContent dividers={true}>
        <Messages myMessages={privateMessages} src={srcUser} />
      </DialogContent>
      <DialogActions>
        <InputCommentary {...inputProps}/>
      </DialogActions>
    </Dialog>
  );
};

PrivateMessage.prototype = {
  open: bool,
  onClose: func.isRequired,
  privateMessages: array,
  srcUser: string,
  title: string
};

export default PrivateMessage;
