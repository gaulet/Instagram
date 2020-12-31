import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  header: {
    position: 'relative',
    height: 30,
  },
  boxTitle: {
    position: 'absolute',
  },
  goBackIcon: {
    zIndex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 1,
  },
}));
