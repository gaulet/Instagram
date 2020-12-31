import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import MessagesBox from './MessagesBox';
import Wrapper from '../Wrapper';
import NewsFeed from '../NewsFeed';
import useStyles from './styles';
import { useBoolean } from '../../hooks';
import PrivateMessage from '../PrivateMessage';

const Home = () => {
  const classes = useStyles();
  const { value: open, setTrue: handleClickOpen, setFalse: onClose } = useBoolean();

  return (
    <Wrapper className={classes.wrapper}>
      <PrivateMessage open={open} onClose={onClose} />
      <Box className={classes.root}>
        <Box className={classes.newsFeed}>
          <NewsFeed />
        </Box>
        <Hidden smDown>
          <Box className={classes.messagesBox}>
            <MessagesBox handleClickOpen={handleClickOpen} />
          </Box>
        </Hidden>
      </Box>
    </Wrapper>
  );
};

export default Home;
