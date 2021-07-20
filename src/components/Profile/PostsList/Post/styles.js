import makeStyles from '@material-ui/core/styles/makeStyles';

const NBTOP = '45%';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  picture: {
    height: '100%',
    width: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.22),
    },
  },
  statsOnMouseOut: {
    opacity: 0,
  },
  statsOnMouseOver: {
    opacity: 1,
  },
  pictureOnMouseOver: {
    filter: 'brightness(70%)',
  },
  iconsLike: {
    position: 'absolute',
    maxWidth: '80px',
    top: NBTOP,
    left: '25%',
    [theme.breakpoints.down('sm')]: {
      left: '15%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '30%',
      left: '26%',
    },
  },
  iconColorWhite: {
    fill: 'white',
  },
  iconsMessage: {
    position: 'absolute',
    maxWidth: '80px',
    top: NBTOP,
    left: '60%',
    [theme.breakpoints.down('xs')]: {
      top: '60%',
      left: '26%',
    },
  },
  numberLike: {
    fontWeight: 600,
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  numberMessage: {
    fontWeight: 600,
    color: 'white',
    marginLeft: theme.spacing(1),
  },
}));
