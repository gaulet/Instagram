import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, Field } from 'react-final-form';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useBoolean } from '../../../hooks';
import TextField from '../../forms/TextField';
import { composeValidators, required, emailFormat, passwordFormat, samePassword } from '../../forms/utils';
import formMessages from '../../forms/messages';
import useStyles from './styles';
import messages from './messages';

const SignupForm = () => {
  const classes = useStyles();
  const { value: showPassword, toggle: togglePasswordView } = useBoolean();

  return (
    <Form
      onSubmit={console.log}
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
                name="fullName"
                component={TextField}
                type="text"
                margin="dense"
                label={<FormattedMessage {...messages.fullName} />}
                fullWidth
                requiredField
                variant="outlined"
                validate={required(<FormattedMessage {...formMessages.requiredField} />)}
              />
            </Grid>
            <Grid item>
              <Field
                name="username"
                component={TextField}
                type="text"
                margin="dense"
                label={<FormattedMessage {...messages.username} />}
                fullWidth
                requiredField
                variant="outlined"
                validate={required(<FormattedMessage {...formMessages.requiredField} />)}
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
                validate={composeValidators(
                  required(<FormattedMessage {...formMessages.requiredField} />),
                  passwordFormat(<FormattedMessage {...messages.passwordTooWeak} />),
                )}
              />
            </Grid>
            <Grid item>
              <Field
                name="confirmPassword"
                component={TextField}
                type={showPassword ? 'text' : 'password'}
                margin="dense"
                InputProps={{
                  endAdornment: values.confirmPassword && (
                    <Typography className={classes.togglePasswordView} onClick={togglePasswordView}>
                      <FormattedMessage {...(showPassword ? messages.hide : messages.show)} />
                    </Typography>
                  ),
                }}
                label={<FormattedMessage {...messages.confirmPassword} />}
                fullWidth
                requiredField
                variant="outlined"
                validate={composeValidators(
                  required(<FormattedMessage {...formMessages.requiredField} />),
                  samePassword(<FormattedMessage {...messages.passwordNotMatching} />),
                )}
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
                <FormattedMessage {...messages.signup} />
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default SignupForm;
