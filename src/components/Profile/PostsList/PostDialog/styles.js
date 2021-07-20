import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
  },
  boxCommentary: {
    maxWidth: 335,
  },
  test: {
    // ! test
    position: 'absolute',
    right: 0,
    top: 0,
  },
  picture: {
    maxHeight: '600px',
    maxWidth: '600px',
    minWidth: '340px',
    width: '100%',
    height: '100%',
  },
  pictureHeaderBox: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    cursor: 'pointer',
  },
  listCommentary: {
    borderLeft: `1px solid ${theme.palette.primary.paper}`,
    borderBottom: `1px solid ${theme.palette.primary.paper}`,
    borderRight: `1px solid ${theme.palette.primary.paper}`,

    width: '100%',

    overflow: 'auto',
    height: 385,
    paddingTop: 16,
    paddingLeft: 16,
    right: '0',
  },
  boxIconInCommentary: {
    borderLeft: `1px solid ${theme.palette.primary.paper}`,
    borderRight: `1px solid ${theme.palette.primary.paper}`,
    height: 45,
    right: '0',
    paddingTop: 4,
    paddingLeft: 16,
    paddingLight: 16,
  },
  nameHeaderBox: {
    fontWeight: 'bold',
    marginLeft: 16,
    cursor: 'pointer',
  },
  headerCommentary: {
    borderTop: `1px solid ${theme.palette.primary.paper}`,
    borderLeft: `1px solid ${theme.palette.primary.paper}`,
    borderBottom: `1px solid ${theme.palette.primary.paper}`,
    borderRight: `1px solid ${theme.palette.primary.paper}`,
    height: 72,
    padding: 16,
  },
  headerCommentaryPicture: {
    marginRight: 20,
    marginBottom: 16,
  },
  boxReleaseDate: {
    borderLeft: `1px solid ${theme.palette.primary.paper}`,
    borderRight: `1px solid ${theme.palette.primary.paper}`,
    borderBottom: `1px solid ${theme.palette.primary.paper}`,
    paddingLeft: 16,
    paddingBottom: 16,
    fontSize: 10,
    letterSpacing: 0.2,
  },
  nbLike: {
    marginLeft: 16,
    cursor: 'pointer',
  },
  boxWriteCommentary: {
    borderLeft: `1px solid ${theme.palette.primary.paper}`,
    borderRight: `1px solid ${theme.palette.primary.paper}`,
    borderBottom: `1px solid ${theme.palette.primary.paper}`,
    height: 67,
    paddingLeft: 16,
    paddingRight: 16,
  },
  pointer: {
    cursor: 'pointer',
  },
}));
