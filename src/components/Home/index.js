import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import MessagesBox from './MessagesBox';
import Wrapper from '../Wrapper';
import NewsFeed from '../NewsFeed';
import useStyles from './styles';
import { useProfile } from './hooks';
import { usePrivateMessage } from '../../hooks';

const Home = () => {
  const classes = useStyles();
  const { profiles } = usePrivateMessage();
  const { myName, myPicture, myLastName } = useProfile();
  
  return (
    <Wrapper className={classes.wrapper}>
      <Box className={classes.root}>
        <Box className={classes.newsFeed}>
          <NewsFeed />
        </Box>
        <Hidden smDown>
          <Box className={classes.messagesBox}>
            <MessagesBox profiles={profiles} myName={`${myLastName}${myName}`} myPicture={myPicture} />
          </Box>
        </Hidden>
      </Box>
    </Wrapper>
  );
};

export default Home;
