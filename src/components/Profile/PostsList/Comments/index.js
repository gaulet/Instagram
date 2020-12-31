import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';

import useStyles from './styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';

const allComments = (classes) => (val, index) => (
  <Grid container alignItems="flex-start" key={`item-${index}`}>
    <ListSubheader className={classes.headerCommentaryPicture} disableGutters>
      <img className={classes.pictureHeaderBox} src={val.src} alt="imgProfile" />
    </ListSubheader>
    <Typography className={classes.textR} variant="body2" gutterBottom>
      <Box component="span" className={classes.textBold}>
        {`${val.name} `}
      </Box>
      {val.comment}

      <Grid className={classes.posteDate}>{'24h'}</Grid>
    </Typography>
  </Grid>
);

const Comments = ({ myComments }) => {
  const classes = useStyles();
  const mapComments = R.addIndex(R.map);

  return <>{mapComments(allComments(classes), myComments)}</>;
};

Comments.protoTypes = {
  myComments: PropTypes.arrayOf(PropTypes.object),
};

export default Comments;
