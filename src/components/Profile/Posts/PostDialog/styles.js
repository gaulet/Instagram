import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  hide: {
    visibility: 'hidden',
  },
  closeIcon: {
    opacity: 0.8,
    '&:hover': {
      opacity: 0.6,
    },
    position: 'fixed',
    top: '2vh',
    left: '96vw',
    fontSize: '2.3em',
    [theme.breakpoints.down('sm')]: {
      left: '94vw',
    },
    [theme.breakpoints.down('xs')]: {
      left: '90vw',
      fontSize: '2em',
    },
  },
  arrowIcon: {
    cursor: 'pointer',
    opacity: 0.8,
    '&:hover': {
      opacity: 0.6,
    },
    fontSize: '2.3em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
  },
}));
