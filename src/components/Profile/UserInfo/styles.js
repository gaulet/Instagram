import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  actions: {
    marginLeft: theme.spacing(2),
  },
  actionsXs: {
    padding: theme.spacing(2, 4, 0, 4),
  },
  settingsIcon: {
    marginTop: 6,
    marginLeft: theme.spacing(2.2),
  },
  messageButton: {
    marginRight: theme.spacing(3),
  },
  userName: {
    fontSize: '28px',
    lineHeight: '32px',
    fontWeight: 300,
  },
  center: {
    textAlign: 'center',
  },
  profilePicture: {
    height: theme.spacing(19),
    width: theme.spacing(19),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(9),
      width: theme.spacing(9),
    },
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(90%)',
    },
  },
  fullName: {
    fontWeight: 600,
    fontSize: '16px',
  },
  number: {
    fontWeight: 600,
  },
  divider: {
    background: theme.palette.primary.light,
    margin: theme.spacing(2, 0, 2, 0),
  },
  clickableStats: {
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));
