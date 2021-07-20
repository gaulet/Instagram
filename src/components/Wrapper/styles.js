import makeStyles from '@material-ui/core/styles/makeStyles';
import { WRAPPER_WIDTH } from '../../constants';

export default makeStyles((theme) => ({
  root: {
    maxWidth: WRAPPER_WIDTH,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
}));
