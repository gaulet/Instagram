import React from 'react';
import { bool, string, node, func, object } from 'prop-types';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const UserPanel = ({ userName, comment, subText, inlineComment, endAdornment, onClick, className, imgProps, src }) => {
  const classes = useStyles();

  const mainText = comment ? (
    <Box className={classNames({ [classes.noWrap]: inlineComment })}>
      <Typography className={classes.prefix} display="inline">
        {userName}
      </Typography>
      <Typography className={classes.mainText} display="inline">
        {comment}
      </Typography>
    </Box>
  ) : (
    <Typography className={classes.mainText} noWrap>
      {userName}
    </Typography>
  );

  return (
    <Grid className={className} container wrap="nowrap" alignItems={comment ? 'stretch' : 'center'}>
      {!inlineComment && (
        <Grid className={classNames(classes.item1, { [classes.clickable]: onClick })} item onClick={onClick}>
          <img className={classes.profilePicture} src={src} alt="profilePicture" {...imgProps} />
        </Grid>
      )}
      <Grid className={classNames(classes.item2, { [classes.clickable]: onClick })} item onClick={onClick}>
        {mainText}
        {subText && (
          <Typography className={classes.subText} noWrap>
            {subText}
          </Typography>
        )}
      </Grid>
      {endAdornment && <Grid item>{endAdornment}</Grid>}
    </Grid>
  );
};

UserPanel.propTypes = {
  userName: string.isRequired,
  subText: string,
  comment: string,
  src: string,
  inlineComment: bool,
  endAdornment: node,
  onClick: func,
  className: string,
  imgProps: object,
};

export default UserPanel;
