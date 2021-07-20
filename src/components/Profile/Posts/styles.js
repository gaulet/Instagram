import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  postBox: {
    position: 'relative',
    // 33.33..% square (33.33.. / 2 = 16.66665..)
    width: '16.66665%',
    padding: '16.66665%',
  },
  post: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '4%',
    [theme.breakpoints.down('sm')]: {
      padding: '2%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.9%',
    },
  },
}));
