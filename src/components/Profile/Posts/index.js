import React, { useState } from 'react';
import { addIndex, map } from 'ramda';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Post from './Post';
import PostDialog from './PostDialog';
import useStyles from './styles';

const posts = [
  { picture: '/img/utopia.png', liked: true, likesNb: '1,3M', commentsNb: '39K' },
  { picture: '/img/blue.jpg', liked: true, likesNb: '3M', commentsNb: '660K' },
  { picture: '/img/photoAlex2.jpg', liked: false, likesNb: '9,8M', commentsNb: '1,4M' },
  { picture: '/img/fight_club_blue.jpg', liked: false, likesNb: '10M', commentsNb: '1,9M' },
  { picture: '/img/photoAlex2.jpg', liked: true, likesNb: '8M', commentsNb: '999K' },
];

const Posts = () => {
  const classes = useStyles();
  const [openedPostIndex, setOpenedPostIndex] = useState();

  return (
    <>
      <PostDialog
        open={openedPostIndex !== undefined}
        posts={posts}
        openedPostIndex={openedPostIndex}
        handleClose={() => setOpenedPostIndex()}
      />
      <Grid container>
        {addIndex(map)(({ picture, liked, likesNb, commentsNb }, index) => (
          <Box key={index} className={classes.postBox}>
            <Box className={classes.post}>
              <Post
                picture={picture}
                liked={liked}
                likesNb={likesNb}
                commentsNb={commentsNb}
                handleClick={() => setOpenedPostIndex(index)}
              />
            </Box>
          </Box>
        ))(posts)}
      </Grid>
    </>
  );
};

export default Posts;
