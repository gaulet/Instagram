import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  pictureHeaderBox: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  headerCommentaryLeftPicture: {
    marginRight: 16,
    marginBottom: 16,
    cursor: 'pointer',
  },
  text: {
    wordWrap: 'break-word',
    padding: 10,
    marginBottom: 18,
    maxWidth: '80%',
    textAlign: 'justify',
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: 10,
  },
  textRight: {
    backgroundColor: theme.palette.primary.light,
  },
  textBold: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  posteDate: {
    marginTop: 16,
  },
}));
