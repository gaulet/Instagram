import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  header: {
    flex: '0 0 5%',
  },
  content: {
    flex: '1 0 0',
    overflowY: 'auto',
  },
  footer: {
    flex: '0 0 4%',
  },
}));
