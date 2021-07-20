import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogTitle: {
    padding: theme.spacing(0, 0.9, 0, 0.9),
  },
  header: {
    height: 40,
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: 1,
  },
  usersList: {
    borderColor: theme.palette.primary.light,
    height: theme.spacing(50),
    padding: theme.spacing(1, 2, 0, 2),
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      padding: 0,
    },
  },
  user: {
    padding: theme.spacing(0.7, 0, 0.7, 0),
  },
}));
