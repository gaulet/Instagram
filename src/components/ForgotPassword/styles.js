import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    maxWidth: 350,
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    },
  },
  forgotPasswordBox: {
    padding: theme.spacing(2, 2, 3, 2),
    marginBottom: 12,
  },
  signUpBox: {
    padding: theme.spacing(2),
  },
  typoInsta: {
    filter: theme.palette.primary.filter,
    width: 180,
    height: 70,
  },
  helper: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  form: {
    paddingTop: theme.spacing(2),
    width: '80%',
  },
  backToLogin: {
    marginTop: theme.spacing(2),
  },
  signUp: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 19,
    letterSpacing: 0.7,
    fontWeight: 400,
  },
  helperText: {
    color: 'grey',
  },
}));
