import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  root: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '100%',
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.paper,
    opacity: '0.9',
  },
}));
