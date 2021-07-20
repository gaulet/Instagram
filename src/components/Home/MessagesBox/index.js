import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { string } from 'prop-types';
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
import FriendsMessages from "../../FriendsMessage"

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

const MessagesBox = ({ myPicture = 'img/blue.jpg', myName = 'user' }) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <>
      <UserPanel
        src={myPicture}
        className={classes.userInfo}
        imgProps={{
          style: {
            height: 65,
            width: 65,
          },
        }}
        onClick={() => alert('go to own profile')}
        userName={myName}
      />
      <Paper>
        <Header title={intl.formatMessage(messages.title)} />
        <Box className={classes.usersList}>
          <FriendsMessages isWrapper={false}/>
        </Box>
      </Paper>
    </>
  );
};

MessagesBox.propTypes = {
  myName: string,
  myPicture: string,
};

export default MessagesBox;
