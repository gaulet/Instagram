import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, Field } from 'react-final-form';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '../../forms/TextField';
import { composeValidators, required, emailFormat } from '../../forms/utils';
import formMessages from '../../forms/messages';
import useStyles from './styles';
import messages from './messages';

const ForgotPasswordForm = () => {
  const classes = useStyles();

  return (
    <Form
      onSubmit={console.log}
      render={({ handleSubmit, invalid, pristine, submitting }) => (
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
              <Button
                className={classes.submitButton}
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                disabled={invalid || pristine || submitting}
              >
                <FormattedMessage {...messages.submit} />
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default ForgotPasswordForm;
