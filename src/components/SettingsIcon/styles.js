import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));
