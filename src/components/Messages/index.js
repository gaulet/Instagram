import React from 'react';
import { map, addIndex } from 'ramda';
import { arrayOf, object, bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import useStyles from './styles';
import messages from './messages';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';

const mapMessages = addIndex(map);

const Picture = ({ src, isMe }) => {
  const classes = useStyles();

  return (
    <ListSubheader className={classNames({ [classes.headerCommentaryLeftPicture]: isMe })} disableGutters>
      <img className={classes.pictureHeaderBox} src={src} alt="imgProfile" />
    </ListSubheader>
  );
};
Picture.prototype = {
  isMe: bool.isRequired,
  src: string.isRequired,
};

const TypographyComment = ({ message, isMe }) => {
  const classes = useStyles();

  return (
    <Typography className={classNames(classes.text, { [classes.textRight]: !isMe })} variant="body2" gutterBottom>
      <FormattedMessage {...messages.message} values={{ message }} />
    </Typography>
  );
};
TypographyComment.prototype = {
  message: string.isRequired,
  isMe: bool.isRequired,
};

const Messages = ({ myMessages = [], src}) => (
  <>
    {mapMessages(
      ({ isMe, message }, index) => (
        <Grid container alignItems="flex-start" key={index} justify={!isMe ? 'flex-end' : 'flex-start'}>
          {isMe && <Picture src={src} key={index} isMe={isMe} />}
          <TypographyComment message={message} isMe={isMe} />
        </Grid>
      ),
      myMessages,
    )}
  </>
);
Messages.protoTypes = {
  myMessages: arrayOf(object),
};

export default Messages;
