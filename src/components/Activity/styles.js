import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  user: {
    padding: theme.spacing(1.5, 0, 1.5, 0),
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
}));
