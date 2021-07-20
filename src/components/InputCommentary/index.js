import React from 'react';
import { Form } from 'react-final-form';
import { func, string, object } from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import messages from './messages';
import useStyles from './styles';

const InputCommentary = ({ value, handleInputCommentary, handleSendCommentary, intl }) => {
  const classes = useStyles()
  return (
    <Form 
    onSubmit={handleSendCommentary}
    render={({ handleSubmit}) => (
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid container alignItems="center" wrap="nowrap">
            <Input
              onChange={handleInputCommentary}
              placeholder={intl.formatMessage(messages.addComment)}
              disableUnderline
              fullWidth={true}
              value={value}
            />
            <Button type="submit" disabled={!value}>
              <FormattedMessage {...messages.publish} />
            </Button>
          </Grid>
        </form>
    )}

    />
  );
};

InputCommentary.propTypes = {
  value: string,
  handleInputCommentary: func,
  handleSendCommentary: func,
  intl: object.isRequired,
};

export default injectIntl(InputCommentary);
