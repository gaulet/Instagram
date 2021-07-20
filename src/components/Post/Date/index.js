import React from 'react';
import { FormattedMessage } from 'react-intl';

import useStyles from './styles';
import messages from '../messages';

import Typography from '@material-ui/core/Typography';

const Date = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <FormattedMessage {...messages.postDate} values={{ date: '4 HOUR AGO' }} />
    </Typography>
  );
};

export default Date;
