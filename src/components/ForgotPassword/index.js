import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { SIGNUP_ROUTE_PATH, LOGIN_ROUTE_PATH } from '../../routes';
import Wrapper from '../Wrapper';
import Form from './Form';
import useStyles from './styles';
import messages from './messages';

const Login = () => {
  const classes = useStyles();

  return (
    <Wrapper className={classes.wrapper}>
      <Grid
        component={Paper}
        className={classes.forgotPasswordBox}
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <img alt="main-title" src="/img/instagram_logo.png" className={classes.typoInsta} />
        </Grid>
        <Grid item className={classes.helper}>
          <Typography className={classes.title} align="center">
            <FormattedMessage {...messages.title} />
          </Typography>
          <Typography className={classes.helperText} align="center">
            <FormattedMessage {...messages.helperText} />
          </Typography>
        </Grid>
        <Grid item className={classes.form}>
          <Form />
        </Grid>
        <Grid item className={classes.backToLogin}>
          <Link color="secondary" component={LinkRouter} to={LOGIN_ROUTE_PATH} underline="none">
            <FormattedMessage {...messages.backToLogin} />
          </Link>
        </Grid>
      </Grid>
      <Grid
        component={Paper}
        className={classes.signUpBox}
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
      >
        <Typography>
          <FormattedMessage
            {...messages.createNewAccount}
            values={{
              endAdornment: (
                <Link
                  component={LinkRouter}
                  className={classes.signUp}
                  to={SIGNUP_ROUTE_PATH}
                  color="secondary"
                  underline="none"
                >
                  <FormattedMessage {...messages.signUp} />
                </Link>
              ),
            }}
          />
        </Typography>
      </Grid>
    </Wrapper>
  );
};

export default Login;
