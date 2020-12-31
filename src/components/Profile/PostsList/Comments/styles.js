import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  pictureHeaderBox: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  headerCommentaryPicture: {
    marginRight: 16,
    marginBottom: 16,
    cursor: 'pointer',
  },
  textR: {
    wordWrap: 'break-word',
    paddingBottom: 22,
    width: '80%',
  },
  textBold: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  posteDate: {
    marginTop: 16,
  },
}));
