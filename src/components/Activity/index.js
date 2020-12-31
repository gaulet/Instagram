import React from 'react';
import { map } from 'ramda';

import { USER_ACTIONS } from '../../constants';
import UserActionButton from '../UserActionButton';
import UserPanel from '../UserPanel';
import Wrapper from '../Wrapper';
import useStyles from './styles';

const users = [
  {
    src: '/img/photoAlex.jpg',
    id: 1,
    userName: 'gauletalexandrefefefefeefefefefef',
    subText: 'petasse erjerj gnnnnnn jknjk njknjk rgjkkkkkjkrtgreger ger ger ',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 2,
    userName: 'gauletalexandre',
    subText: '4d',
  },
  {
    src: '/img/photoAlex.jpg',
    id: 3,
    userName: 'gauletalexandre',
    subText:
      'petasse ergkejrgerkgkermgkerm gklemrlgkmergmekrgmkermgklemrgkelmrgkemrgklermgekrgmkemrgklemrgklemrgklemrgekmrgekmrg',
  },
  {
    src: '/img/photoAlex.jpg',

    id: 4,
    userName: 'gauletalexandreerjgergejrngjenrgjkenrgjerngjnrgjnerkgnnjjngrjgnngjrngjergknerjgnrgn',
    subText: 'petasse',
  },
  { id: 5, userName: 'gauletalexandre', subText: 'liked your post. 3d', src: '/img/photoAlex.jpg' },
  { id: 6, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 7, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 8, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 9, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 11, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 12, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 13, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 14, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 15, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 16, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 17, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 18, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 19, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 20, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 30, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
  { id: 40, userName: 'gauletalexandre', subText: 'petasse', src: '/img/photoAlex.jpg' },
];

const Activity = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      {map(({ id, userName, subText, src }) => (
        <UserPanel
          onClick={() => alert('go to profile')}
          className={classes.user}
          src={src}
          key={id}
          userName={userName}
          subText={subText}
          endAdornment={<UserActionButton action={USER_ACTIONS.following} size="small" />}
        />
      ))(users)}
    </Wrapper>
  );
};

export default Activity;
