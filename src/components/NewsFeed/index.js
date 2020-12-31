import React from 'react';
import { map } from 'ramda';

import Grid from '@material-ui/core/Grid';
import Post from '../Post';
import useStyles from './styles';

const news = [
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '1',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '2',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '3',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '4',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '5',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '6',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '7',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '8',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '9',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '10',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '11',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '12',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '13',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '14',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '15',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '16',
  },
  {
    userName: 'gaulet_marvin',
    img: '/img/marvin.jpg',
    id: '17',
  },
];

const NewsFeed = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      {map(({ id, userName, img }) => (
        <Grid key={id} className={classes.news} item>
          <Post direction="column" img={img} />
        </Grid>
      ))(news)}
    </Grid>
  );
};

export default NewsFeed;
