import React from 'react';
import { shape, bool, string, func } from 'prop-types';
import { map, addIndex } from 'ramda';

import UserPanel from '../../UserPanel';
import useStyles from '../styles';
import InputCommentary from '../../InputCommentary';

import Icons from '../Icons';
import Likes from '../Likes';
import Date from '../Date';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const mapIndex = addIndex(map);

const testTabCom2 = [
  { src: '/img/alex.jpg', userName: 'sebastienbertrand__', comment: '@alice_dvr Moi jui triste 🤧' },
  { src: '/img/photoAlex.jpg', userName: 'sebastienbertrand__', comment: "@alice_dvr Quand j'essaie de trouver!" },
  {
    src: '/img/fchanal.jpg',
    userName: 'the_photo_alchemist',
    comment: 'That ring light is so distracting. It really takes away from the overall shot.',
  },
  { src: '/img/marvin.jpg', userName: 'be_a_pretty_nightmare', comment: 'Cette chemise est trop cool *o*' },
  { src: '/img/marvin.jpg', userName: 'be_a_pretty_nightmare', comment: 'Dm ye bakarmısınz lütfen' },
  {
    src: '/img/photoalex2.jpg',
    userName: 'iso_fotografiabr',
    comment:
      'Que ideiaaa, eu amei, arrasta pra ver esse resultado lindo ❤️ @koaliticvisuals Eu sei que você quer aproveitar a quarentena pra estudar fotografia, acesse o link que está na nossa bio! #fotografiabrasil #brasil #fotostumblr #amorporfotografia #amofotografar #isofotografiabr #fotografosbrasileiros #fotosincriveis #fotodeensaio',
  },
  { src: '/img/photoAlex.jpg', userName: 'be_a_pretty_nightmare', comment: 'Cette chemise est trop cool *o*' },
];

const PostRow = ({ inputProps, likeProps }) => {
  const classes = useStyles();

  const comPostRow = (infoComment, index) => (
    <UserPanel key={index} {...infoComment} subText={'4 HOUR AGO'} className={classes.comment} />
  );

  return (
    <Grid container className={classes.root} wrap="nowrap">
      <Grid container alignItems="center">
        <img src={'/img/height.jpg'} alt="asadsag" className={classes.picture} />
      </Grid>
      <Grid container direction="column" className={classes.comments}>
        <UserPanel src="/img/photoAlex.jpg" userName={'gaulet_marvin'} className={classes.headers} />​
        <Box className={classes.fillIn}>
          <Box className={classes.boxComments}>{mapIndex(comPostRow, testTabCom2)}</Box>
        </Box>
        <Box className={classes.postWrapper}>
          <Box className={classes.iconComment}>
            <Icons isRow={'row'} />
            <Likes />
          </Box>
          <Date />
        </Box>
        <Box className={classes.input}>
          <InputCommentary {...inputProps} />
        </Box>
      </Grid>
    </Grid>
  );
};

PostRow.propTypes = {
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
export default PostRow;
