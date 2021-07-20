import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  usersList: {
    width: 500,
    height: 250,
    overflow: 'auto',
    padding: theme.spacing(0, 2, 0, 2),
  },
  header: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  user: {
    padding: theme.spacing(1.5, 0, 1.5, 0),
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 1,
  },
}));
