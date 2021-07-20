import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shape, bool, string, func } from 'prop-types';
import { map, addIndex } from 'ramda';
import classNames from 'classnames';

import UserPanel from '../../UserPanel';
import useStyles from '../styles';
import InputCommentary from '../../InputCommentary';
import messages from '../messages';
import Icons from '../Icons';
import Likes from '../Likes';
import Date from '../Date';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const mapIndex = addIndex(map);

const testTabCom = [
  { userName: 'sebastienbertrand__', comment: '@alice_dvr Moi jui triste 🤧' },
  { userName: 'sebastienbertrand__', comment: "@alice_dvr Quand j'essaie de trouver!" },
  {
    userName: 'iso_fotografiabr',
    comment:
      'Que ideiaaa, eu amei, arrasta pra ver esse resultado lindo ❤️ @koaliticvisuals Eu sei que você quer aproveitar a quarentena pra estudar fotografia, acesse o link que está na nossa bio! #fotografiabrasil #brasil #fotostumblr #amorporfotografia #amofotografar #isofotografiabr #fotografosbrasileiros #fotosincriveis #fotodeensaio',
  },
];

const PostColumn = ({ isRow, inputProps, likeProps }) => {
  const classes = useStyles();

  const inputCommentary = <InputCommentary {...inputProps} />;

  const comPostColumn = (infoComment, index) => (
    <UserPanel key={index} userName={infoComment.userName} inlineComment comment={infoComment.comment} />
  );

  const hiddenInput = isRow ? (
    <Hidden xsDown>
      <Box className={classes.input}>{inputCommentary}</Box>
    </Hidden>
  ) : (
    <Box className={classes.input}>{inputCommentary}</Box>
  );

  return (
    <Grid container className={classNames(classes.rootColumn, { [classes.xsRootColumn]: isRow })}>
      <UserPanel src="/img/photoAlex.jpg" userName={'gaulet_marvin'} className={classes.headers} />​
      <img src={'/img/height.jpg'} alt="asadsad" className={classes.pictureColumn} />
      <Box className={classes.postWrapper}>
        <Icons />
        <Likes />
        <Box className={classes.boxColumn}>
          <UserPanel userName={'ustriadh'} inlineComment comment={'Je voudrais m’excuser auprès des personnes'} />
          <Typography className={classes.viewAll}>
            <FormattedMessage {...messages.viewAll} values={{ comments: '347' }} />
          </Typography>
          {mapIndex(comPostColumn, testTabCom)}
        </Box>
        <Date />
      </Box>
      {hiddenInput}
    </Grid>
  );
};

PostColumn.propTypes = {
  isRow: bool.isRequired,
  inputProps: shape({
    value: string,
    handleInputCommentary: func,
    handleSendCommentary: func,
  }),
  likeProps: shape({
    liked: bool,
    fontSize: func,
  }),
};

export default PostColumn;
