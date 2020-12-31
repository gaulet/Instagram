import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  root: {
    height: 200,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  profilePicture: {
    borderRadius: '50%',
    height: 90,
    width: 90,
  },
  suggestion: {
    height: 50,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  ask: {
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 500,
    textAlign: 'center',
  },
  unfollow: {
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 500,
    color: '#DC565B',
  },
  cancel: {
    fontSize: 14,
    letterSpacing: 2,
  },
}));
