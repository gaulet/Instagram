import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  title: {
    height: 200,
  },
  profilePicture: {
    borderRadius: '50%',
    height: 90,
    width: 90,
  },
  content: {
    padding: 0,
    borderColor: theme.palette.primary.light,
  },
  listItem: {
    justifyContent: 'center !important',
    height: 50,
    borderColor: `${theme.palette.primary.light} !important`,
  },
  ask: {
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 500,
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
