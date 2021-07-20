import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  title: {
    padding: 0,
  },
  listItem: {
    justifyContent: 'center',
    height: 50,
    borderColor: theme.palette.primary.light,
  },
  content: {
    padding: 0,
    borderColor: theme.palette.primary.light,
  },
  changePassword: {
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 500,
    color: '#5196E9',
  },
  logout: {
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 500,
    color: '#DC565B',
  },
  cancel: {
    fontSize: 14,
    letterSpacing: 2,
    color: theme.palette.text.primary,
  },
}));
