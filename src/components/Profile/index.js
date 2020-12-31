import React from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Wrapper from '../Wrapper';
import UserInfo from './UserInfo';
import Posts from './Posts';
import useStyles from './styles';
import { useProfile } from './hook';

const Profile = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { profile, test } = useProfile(id);

  console.log(test);

  return (
    <Wrapper className={classes.wrapper}>
      <Grid container direction="column">
        <UserInfo {...profile} />
        <Posts />
      </Grid>
    </Wrapper>
  );
};

export default Profile;
