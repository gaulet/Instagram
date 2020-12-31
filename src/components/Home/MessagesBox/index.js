import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { map } from 'ramda';
import { string, func } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import { FRIENDS_MESSAGES_ROUTE_PATH } from '../../../routes';
import UserPanel from '../../UserPanel';
import useStyles from './styles';
import messages from './messages';

const users = [
  {
    src: '/img/photoAlex.jpg',
    id: 1,
    userName: 'gauletalexandre',
    subText: 'hyeres',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 2,
    userName: 'Christin',
    subText: 'tumbarello',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 3,
    userName: 'marvin_gaulet',
    subText: '',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 4,
    userName: 'gauletalexandreerjgergejrngjenrgjkenrgjerngjnrgjnerkgnnjjngrjgnngjrngjergknerjgnrgn',
    subText: 'petasse',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 5,
    userName: 'fChanal',
    subText: 'liked your post. 3d',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 6,
    userName: 'toto',
    subText: 'petasse',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 7,
    userName: 'gauletalexandre',
    subText: 'petasse',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 8,
    userName: 'gauletalexandre',
    subText: 'petasse',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 9,
    userName: 'gauletalexandre',
    subText:
      'petasse ergkejrgerkgkermgkerm gklemrlgkmergmekrgmkermgklemrgkelmrgkemrgklermgekrgmkemrgklemrgklemrgklemrgekmrgekmrg',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 10,
    userName: 'gauletalexandre',
    subText: 'petasse',
  },
];

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.header} container justify="space-between" alignItems="center">
      <Box />
      <Typography className={classes.title}>{title}</Typography>
      <Link color="inherit" component={RouterLink} to={FRIENDS_MESSAGES_ROUTE_PATH}>
        <Typography component={FormattedMessage} {...messages.seeAll} />
      </Link>
    </Grid>
  );
};

Header.propTypes = {
  title: string,
};

const MessagesBox = ({ handleClickOpen }) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <>
      <UserPanel
        src={'/img/photoAlex.jpg'}
        className={classes.userInfo}
        imgProps={{
          style: {
            height: 65,
            width: 65,
          },
        }}
        onClick={() => alert('go to own profile')}
        userName="userName"
        subText="subText"
      />
      <Paper>
        <Header title={intl.formatMessage(messages.title)} />
        <Box className={classes.usersList}>
          {map(({ id, userName, comment, subText, src }, index) => (
            <UserPanel
              className={classes.user}
              src={src}
              imgProps={{
                style: {
                  height: 30,
                  width: 30,
                },
              }}
              onClick={handleClickOpen}
              key={id}
              userName={userName}
              subText={subText}
            />
          ))(users)}
        </Box>
      </Paper>
    </>
  );
};

MessagesBox.propTypes = {
  handleClickOpen: func.isRequired,
};

export default MessagesBox;
