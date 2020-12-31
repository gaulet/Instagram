import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    maxWidth: 350,
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    },
  },
  loginBox: {
    padding: theme.spacing(2, 0, 3, 0),
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
  form: {
    width: '80%',
  },
  forgotPassword: {
    marginTop: theme.spacing(2),
  },
  signUp: {
    fontWeight: 'bold',
  },
}));
