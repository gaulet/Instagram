import React from 'react';
import { func, string, object } from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import messages from './messages';

const InputCommentary = ({ value, handleInputCommentary, handleSendCommentary, intl }) => {
  return (
    <Grid container alignItems="center" wrap="nowrap">
      <Input
        onChange={handleInputCommentary}
        fullWidth
        placeholder={intl.formatMessage(messages.addComment)}
        disableUnderline
        value={value}
      />
      <Button onClick={handleSendCommentary} disabled={!value}>
        <FormattedMessage {...messages.publish} />
      </Button>
    </Grid>
  );
};

InputCommentary.propTypes = {
  value: string,
  handleInputCommentary: func,
  handleSendCommentary: func,
  intl: object.isRequired,
};

export default injectIntl(InputCommentary);
