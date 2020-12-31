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

const Picture = ({ src, isMy }) => {
  const classes = useStyles();

  return (
    <ListSubheader className={classNames({ [classes.headerCommentaryLeftPicture]: isMy })} disableGutters>
      <img className={classes.pictureHeaderBox} src={src} alt="imgProfile" />
    </ListSubheader>
  );
};
Picture.prototype = {
  isMy: bool.isRequired,
  src: string.isRequired,
};

const TypographyComment = ({ message, isMy }) => {
  const classes = useStyles();

  return (
    <Typography className={classNames(classes.text, { [classes.textRight]: !isMy })} variant="body2" gutterBottom>
      <FormattedMessage {...messages.message} values={{ message }} />
    </Typography>
  );
};
TypographyComment.prototype = {
  message: string.isRequired,
  isMy: bool.isRequired,
};

const Messages = ({ myMessages = [] }) => (
  <>
    {mapMessages(
      ({ isMy, src, message }, index) => (
        <Grid container alignItems="flex-start" key={index} justify={!isMy ? 'flex-end' : 'flex-start'}>
          {isMy && <Picture src={src} key={index} isMy={isMy} />}
          <TypographyComment message={message} isMy={isMy} />
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
