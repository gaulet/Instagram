import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { map } from 'ramda';
import { bool, func, string } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ACTIVITY_ROUTE_PATH } from '../../routes';
import { USER_ACTIONS } from '../../constants';
import UserActionButton from '../UserActionButton';
import UserPanel from '../UserPanel';
import useStyles from './styles';
import messages from './messages';

const users = [
  {
    src: '/img/photoAlex.jpg',
    id: 1,
    userName: 'gauletalexandrefefefefeefefefefef',
    subText: 'petasse erjerj gnnnnnn jknjk njknjk rgjkkkkkjkrtgreger ger ger ',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 2,
    userName: 'gauletalexandre',
    subText: '4d',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 3,
    userName: 'gauletalexandre',
    subText:
      'petasse ergkejrgerkgkermgkerm gklemrlgkmergmekrgmkermgklemrgkelmrgkemrgklermgekrgmkemrgklemrgklemrgklemrgekmrgekmrg',
  },
  {
    src: '/img/photoAlex.jpg',

    id: 4,
    userName: 'gauletalexandreerjgergejrngjenrgjkenrgjerngjnrgjnerkgnnjjngrjgnngjrngjergknerjgnrgn',
    subText: 'petasse',
  },
  { id: 5, userName: 'gauletalexandre', subText: 'liked your post. 3d', src: '/img/photoAlex.jpg' },
  { id: 6, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 7, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 8, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 9, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 11, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 12, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 13, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 14, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 15, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 16, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 17, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 18, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 19, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 20, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 30, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 40, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
];

const Header = ({ title, handleClose }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.header} container justify="space-between" alignItems="center">
      <Box />
      <Typography className={classes.title}>{title}</Typography>
      <Link color="inherit" component={RouterLink} to={ACTIVITY_ROUTE_PATH} onClick={handleClose}>
        <Typography component={FormattedMessage} {...messages.seeAll} />
      </Link>
    </Grid>
  );
};

Header.propTypes = {
  title: string,
  handleClose: func.isRequired,
};

const ActivityMenu = ({ open, anchorEl, handleClose }) => {
  const classes = useStyles();
  const intl = useIntl();
  const isInSmBreakpoint = useMediaQuery(useTheme().breakpoints.down('sm'));

  useEffect(() => {
    isInSmBreakpoint && handleClose();
  }, [isInSmBreakpoint, handleClose]);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Header title={intl.formatMessage(messages.title)} handleClose={handleClose} />
      <Box className={classes.usersList}>
        {map(({ id, userName, src, subText }) => (
          <UserPanel
            className={classes.user}
            onClick={() => alert('go to profile')}
            key={id}
            src={src}
            userName={userName}
            subText={subText}
            endAdornment={<UserActionButton action={USER_ACTIONS.following} size="small" />}
          />
        ))(users)}
      </Box>
    </Popover>
  );
};

ActivityMenu.propTypes = {
  open: bool,
  handleClose: func.isRequired,
};

export default ActivityMenu;
