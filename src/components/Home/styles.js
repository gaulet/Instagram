import { makeStyles } from '@material-ui/core/styles';
import { WRAPPER_WIDTH } from '../../constants';

export default makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  newsFeed: {
    // background: 'yellow',
    maxWidth: WRAPPER_WIDTH * 0.65,
    width: '100%',
  },
  messagesBox: {
    position: 'fixed',
    left: `calc((100% - ${WRAPPER_WIDTH}px) / 2 + ${WRAPPER_WIDTH}px * 0.7)`,
    maxWidth: WRAPPER_WIDTH * 0.3,
    width: '100%',
  },
}));
