import React from 'react';

import { func, bool, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import InputCommentary from '../InputCommentary';

import useStyles from './styles';
import Messages from '../Messages';
import messages from './messages';

import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import GoBackIcon from '../GoBackIcon';

const myMessages = [
  {
    src: '/img/photoAlex.jpg',
    message: 'Waaa trop',
    name: 'Alexandre',
    isMy: true,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Oui tkt pas?',
    name: 'Mounia',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Cliquez sur le lien ci-dessus pour ouvrir un éditeur en ligne.',
    name: 'Marvin',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Waaa trop!',
    name: 'Florian',
    isMy: true,
  },
  {
    src: '/img/photoAlex.jpg',
    message:
      'Cliquez sur le lien ci-dessus pour ouvrir un éditeur en ligne. Vous êtes libres de faire quelques changements et de voir comment ils affectent l’affichage. La plupart des pages de ce guisMye auront des exemples modifiables comme celui-ci Cliquez sur le lien ci-dessus pour ouvrir un éditeur en ligne. Vous êtes libres de faire quelques changements et de voir comment ils affectent l’affichage. La plupart des pages de ce guide auront des exemples modifiables comme celui-ci',

    name: 'Mounia',
    isMy: true,
  },
  {
    src: '/img/photoAlex.jpg',
    message: '<3 <3 <3!',
    name: 'Mounia',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Cliquez sur le lien ci-dessus.',
    name: 'Mounia',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Waaa trop',
    name: 'Alexandre',
    isMy: true,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Cliquez sur le lien ci-dessus pour ouvrir un éditeur en ligne.',
    name: 'Mounia',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message:
      'La plupart des pages de ce guide auront des exemples modifiables comme celui-ci Cliquez sur le lien ci-dessus pour ouvrir un éditeur en ligne. Vous êtes libres de faire quelques changements et de voir comment ils affectent l’affichage. La plupart des pages de ce guide auront des exemples modifiables comme celui-ci',
    name: 'Marvin',
    isMy: true,
  },
  {
    src: '/img/photoAlex.jpg',
    message: 'Waaa trop!',
    name: 'Florian',
    isMy: true,
  },
  {
    src: '/img/photoAlex.jpg',
    message: '<3 <3 <3!',
    name: 'Mounia',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message: '<3 <3 <3!',
    name: 'Mounia',
    isMy: false,
  },
  {
    src: '/img/photoAlex.jpg',
    message: '<3 <3 <3!',
    name: 'Mounia',
    isMy: true,
  },
];

const TypographyHeader = ({ className }) => (
  <Typography className={className}>
    <FormattedMessage {...messages.friendName} values={{ friendName: 'Marvin' }} />
  </Typography>
);

TypographyHeader.prototype = {
  className: object.isRequired,
};

const Header = ({ onClose }) => {
  const classes = useStyles();

  return (
    <DialogTitle>
      <Grid container className={classes.header} spacing={1} justify="flex-start" alignItems="center">
        <GoBackIcon handleClick={onClose} className={classes.goBackIcon} />
        <Grid container justify="center" alignItems="center" className={classes.boxTitle}>
          <TypographyHeader className={classes.title} />
        </Grid>
      </Grid>
    </DialogTitle>
  );
};

Header.prototype = {
  onClose: func.isRequired,
};

const PrivateMessage = ({ open, onClose }) => {
  const theme = useTheme();
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
      maxWidth="sm"
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
    >
      <Header onClose={onClose} />
      <DialogContent dividers={true}>
        <Messages myMessages={myMessages} />
      </DialogContent>
      <DialogActions>
        <InputCommentary />
      </DialogActions>
    </Dialog>
  );
};

PrivateMessage.prototype = {
  open: bool,
  onClose: func.isRequired,
};

export default PrivateMessage;
