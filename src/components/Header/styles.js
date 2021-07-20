import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.paper,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  logoInsta: {
    filter: theme.palette.primary.filter,
    height: 28,
    marginTop: 3,
    '&:hover': {
      opacity: 0.8,
    },
  },
  divider: {
    height: 28,
    background: theme.palette.primary.light,
  },
  typoInsta: {
    filter: theme.palette.primary.filter,
    height: 40,
    marginTop: 7.2,
    '&:hover': {
      opacity: 0.8,
    },
  },
  icons: {
    fontSize: 30,
  },
}));
