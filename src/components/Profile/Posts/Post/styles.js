import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
  },
  picture: {
    height: '100%',
    width: '100%',
  },
  stats: {
    opacity: 0,
  },
  statsOnMouseOver: {
    opacity: 1,
  },
  pictureOnMouseOver: {
    filter: 'brightness(70%)',
  },
  likesSection: {
    position: 'absolute',
    maxWidth: '80px',
    top: '45%',
    left: '18%',
    [theme.breakpoints.down('xs')]: {
      top: '30%',
      left: '26%',
    },
  },
  commentsSection: {
    position: 'absolute',
    maxWidth: '80px',
    top: '45%',
    left: '55%',
    [theme.breakpoints.down('xs')]: {
      top: '60%',
      left: '26%',
    },
  },
  likesNb: {
    fontWeight: 600,
    color: 'white',
    marginLeft: '4px',
  },
  commentsNb: {
    fontWeight: 600,
    color: 'white',
    marginLeft: '4px',
  },
  iconColor: {
    fill: 'white',
  },
}));
