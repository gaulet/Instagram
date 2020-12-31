import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  item1: {
    paddingRight: theme.spacing(2),
  },
  item2: {
    wordBreak: 'break-word',
    overflow: 'hidden',
    flexGrow: 1,
    paddingRight: theme.spacing(2),
  },
  noWrap: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: '50%',
  },
  prefix: {
    paddingRight: theme.spacing(0.7),
    fontWeight: 600,
  },
  mainText: {
    fontSize: '15px',
  },
  subText: {
    color: '#959595',
    fontSize: '12px',
    letterSpacing: '.2px',
  },
  clickable: {
    cursor: 'pointer',
  },
}));
