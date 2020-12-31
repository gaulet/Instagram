import makeStyles from '@material-ui/core/styles/makeStyles';
import { WRAPPER_WIDTH } from '../../constants';

const WIFTHBOXCOMMENTS = 320;

export default makeStyles((theme) => ({
  root: {
    maxWidth: 915,
    minHeight: 350,
    backgroundColor: theme.palette.primary.paper,
  },
  picture: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: 600,
  },
  comments: {
    minWidth: WIFTHBOXCOMMENTS,
    width: WIFTHBOXCOMMENTS,
  },
  boxComments: {
    position: 'absolute',
    bottom: 0,
    top: -19,
    overflow: 'auto',
    width: WIFTHBOXCOMMENTS,
    marginRight: 20,
    paddingLeft: 14,
    paddingRight: 14,
  },
  fillIn: {
    flexGrow: 1,
    position: 'relative',
  },
  input: {
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    padding: 14,
    width: '100%',
  },
  rootColumn: {
    backgroundColor: theme.palette.primary.paper,
    maxWidth: WRAPPER_WIDTH * 0.65 - 14,
    width: '100%',
  },
  xsRootColumn: {
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  boxColumn: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 29,
    },
    paddingLeft: 14,
  },
  headers: {
    width: '100%',
    padding: 14,
    height: 70,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
  },
  iconComment: {
    display: 'flex',
    marginBottom: 8,
  },
  pictureColumn: {
    width: '100%',
    height: '100%',
  },
  postWrapper: {
    padding: 15,
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    width: '100%',
  },

  comment: {
    marginTop: 14,
  },
  wrapper: {
    width: '75%',
  },
  viewAll: {
    color: '#959595',
    fontSize: '14px',
    letterSpacing: '.3px',
  },
}));
