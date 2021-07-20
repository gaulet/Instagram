import React from 'react';
import { FormattedMessage } from 'react-intl';

import useStyles from './styles';
import messages from '../messages';

import Typography from '@material-ui/core/Typography';

const Likes = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <FormattedMessage {...messages.likes} values={{ likes: 122 }} />
    </Typography>
  );
};

export default Likes;
