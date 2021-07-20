import React from 'react';
import { map } from 'ramda';

import UserPanel from '../UserPanel';
import Wrapper from '../Wrapper';
import useStyles from './styles';
import { usePrivateMessage } from '../../hooks';
import PrivateMessage from '../PrivateMessage';
import { Grid } from '@material-ui/core';

const Messages = ({profiles, handleClickOpenAndUpdateState, classes}) => {

  return (
    <>
      {map(({ id, name, lastName, picture }) => (
            <UserPanel
              className={classes.user}
              src={picture}
              imgProps={{
                style: {
                  height: 30,
                  width: 30,
                },
              }}
              onClick={handleClickOpenAndUpdateState(id)}
              key={id}
              userName={`${name}${lastName}`}
            />
          ))(profiles)}
    </>
  );
};

const FriendsMessages = ({isWrapper = true}) => {
  const classes = useStyles();
  const {id, nameUser, srcUser, open, statePrivateMessages, handleClickOpenAndUpdateState, onClose, profiles } = usePrivateMessage();

  const NewWrapper = isWrapper ? Wrapper : Grid
  const propsWrapper = isWrapper ?  classes.wrapper : undefined
  return (
    <NewWrapper className={propsWrapper}>
        <PrivateMessage id={id} title={nameUser} open={open} onClose={onClose} privateMessages={statePrivateMessages} srcUser={srcUser} />
        <Messages classes={classes} handleClickOpenAndUpdateState={handleClickOpenAndUpdateState} profiles={profiles}/>
    </NewWrapper>
    )
}

export default FriendsMessages;
