import React from 'react';
import { addIndex, map } from 'ramda';

import Grid from '@material-ui/core/Grid';
// import useStyles from './styles'; !!
import Post from './Post';
import PostDialog from './PostDialog';
import { useListPicture } from './hooks';

const myComments = [
  {
    src: '/img/photoAlex.jpg',
    comment: 'Waaa trop',
    name: 'Alexandre',
  },
  {
    src: '/img/photoAlex.jpg',
    comment:
      'asdasdd asdasdasdasdasdaskdasldmaslkdmalkdm asdasdd asdasdasdasdasdaskdasldmaslkdmalkdm asdasdd asdasdasdasdasda skdasldmasl kdmalkdm asdasdd asdasdasdasdasdaskdasldmaslkdmalkdm asdasdd asdasdasdasdasdaskdasldmaslkdmalkdm asdasdd asdasdasdasdasdaskdasldmaslkdmalkdm ',
    name: 'Mounia',
  },
  {
    src: '/img/photoAlex.jpg',
    comment:
      'l skjfds fsdfsdf sfsdf sdfsdfdsfsdfdsfsfsdfds scdsdcsdcdscdscsdcdscdscsdcdscsdcsdcdscdscddscsdcsdcsdcsdcsdcsdcddscsdcdsc',
    name: 'Marvin',
  },
  {
    src: '/img/photoAlex.jpg',
    comment: 'Waaa trop!',
    name: 'Florian',
  },
  {
    src: '/img/photoAlex.jpg',
    comment: '<3 <3 <3!',
    name: 'Mounia',
  },
  {
    src: '/img/photoAlex.jpg',
    comment: '<3 <3 <3!',
    name: 'Mounia',
  },
  {
    src: '/img/photoAlex.jpg',
    comment: '<3 <3 <3!',
    name: 'Mounia',
  },
];
const myComments2 = [
  {
    src: '/img/photoAlex.jpg',
    comment: '<3 <3 <3!',
    name: 'Mounia',
  },
  {
    src: '/img/photoAlex2.jpg',
    comment: '<3 <3 <3!',
    name: 'Mounia',
  },
  {
    src: '/img/photoAlex.jpg',
    comment: '<3 <3 <3!',
    name: 'Mounia',
  },
];
const posts = [
  { src: '/img/photoAlex2.jpg', liked: true, likes: '1,3M', comments: '39K', myComments: myComments },
  { src: '/img/photoAlex2.jpg', liked: true, likes: '3M', comments: '660K', myComments: myComments2 },
  { src: '/img/photoAlex2.jpg', liked: false, likes: '9,8M', comments: '1,4M', myComments: myComments },
  { src: '/img/photoAlex2.jpg', liked: false, likes: '10M', comments: '1,9M', myComments: myComments2 },
  { src: '/img/photoAlex2.jpg', liked: true, likes: '8M', comments: '999K', myComments: myComments },
];

const PostsList = () => {
  const [open, propsZoom, handleClickOpen, handleClose, handleLike, liked] = useListPicture(posts);

  return (
    <>
      <PostDialog
        {...propsZoom}
        handleClose={handleClose}
        open={open}
        handleClickOpen={handleClickOpen}
        handleLike={handleLike}
        liked={liked}
      />
      <Grid container>
        {addIndex(map)(({ src, liked, likes, comments }, index) => (
          <Grid item xs={4}>
            <Post handleClick={handleClickOpen(index)} src={src} liked={liked} likes={likes} comments={comments} />
          </Grid>
        ))(posts)}
      </Grid>
    </>
  );
};

export default PostsList;
