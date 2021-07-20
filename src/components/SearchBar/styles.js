import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 4,
    border: 1,
    width: 200,
  },
  iconCancel: {
    paddingRight: 0,
  },
  searchIcon: {
    marginTop: -5.2,
    fill: theme.palette.primary.main,
  },
  icons: {
    fill: theme.palette.primary.main,
  },
}));
