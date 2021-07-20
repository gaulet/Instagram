import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleContainer: {
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    height: 70,
  },
  suggestionContainer: {
    height: 50,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  title: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 400,
  },
  upload: {
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 500,
    color: '#5196E9',
  },
  remove: {
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
