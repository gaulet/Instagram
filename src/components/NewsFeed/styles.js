import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  news: {
    // background: 'purple',
    paddingTop: '5vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2.5vh',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
    },
  },
}));
