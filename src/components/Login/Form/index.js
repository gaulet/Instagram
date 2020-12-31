import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, Field } from 'react-final-form';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useBoolean } from '../../../hooks';
import TextField from '../../forms/TextField';
import { composeValidators, required, emailFormat } from '../../forms/utils';
import formMessages from '../../forms/messages';
import useStyles from './styles';
import messages from './messages';
import { useConnect } from './hooks';

const LoginForm = () => {
  const classes = useStyles();
  const { setLogin } = useConnect();
  const { value: showPassword, toggle: togglePasswordView } = useBoolean();

  return (
    <Form
      onSubmit={setLogin}
      render={({ handleSubmit, invalid, pristine, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" wrap="nowrap">
            <Grid item>
              <Field
                name="email"
                component={TextField}
                type="text"
                margin="dense"
                label={<FormattedMessage {...messages.email} />}
                fullWidth
                requiredField
                variant="outlined"
                validate={composeValidators(
                  required(<FormattedMessage {...formMessages.requiredField} />),
                  emailFormat(<FormattedMessage {...formMessages.badEmailFormat} />),
                )}
              />
            </Grid>
            <Grid item>
              <Field
                name="password"
                component={TextField}
                type={showPassword ? 'text' : 'password'}
                margin="dense"
                InputProps={{
                  endAdornment: values.password && (
                    <Typography className={classes.togglePasswordView} onClick={togglePasswordView}>
                      <FormattedMessage {...(showPassword ? messages.hide : messages.show)} />
                    </Typography>
                  ),
                }}
                label={<FormattedMessage {...messages.password} />}
                fullWidth
                requiredField
                variant="outlined"
                validate={required(<FormattedMessage {...formMessages.requiredField} />)}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                disabled={invalid || pristine || submitting}
              >
                <FormattedMessage {...messages.login} />
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default LoginForm;
