import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  userInfo: {
    padding: theme.spacing(3, 3, 2, 3),
  },
  usersList: {
    height: 300,
    overflow: 'auto',
    padding: theme.spacing(0, 2, 0, 2),
  },
  header: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  user: {
    padding: theme.spacing(1.5, 0, 1.5, 0),
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 1,
  },
}));
