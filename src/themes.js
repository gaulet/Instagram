import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const WHITE = '#ffffff';
const BLACK = '#000000';
const WHITE_GREY = '#fafafa';
const GREY_LIGHT = '#282828';
const GREY_THEME_LIGHT = '#EFEFEF';
const DARK_GREY = '#212121';
const DARK = '#171717';
const GREY = '#303030';
const LIGHT_GREY = '#DBDBDB';
const BLUE = '#4183f6';
const DISABLED_GREY = '#8c8b87';
const RED = '#e63900';

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
    palette: {
      background: {
        default: WHITE_GREY,
      },
      primary: {
        main: BLACK,
        dark: WHITE_GREY,
        light: LIGHT_GREY,
        paper: WHITE,
        contrastText: BLACK,
      },
      secondary: {
        main: BLUE,
        dark: BLUE,
        light: GREY_THEME_LIGHT,
        paper: RED,
        contrastText: GREY,
      },
      disabled: {
        main: BLACK,
      },
      text: {
        primary: DARK,
        secondary: DARK,
        disabled: DISABLED_GREY,
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: WHITE,
        },
      },
      MuiSvgIcon: {
        root: {
          fill: BLACK,
        },
      },
    },
  }),
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
    palette: {
      background: {
        default: DARK,
      },
      primary: {
        main: WHITE,
        dark: DARK,
        light: GREY,
        paper: DARK_GREY,
        contrastText: BLACK,
        filter: `invert(100%)`,
      },
      secondary: {
        main: BLUE,
        dark: WHITE,
        light: GREY_LIGHT,
        paper: RED,
        contrastText: BLACK,
        filter: `brightness(0%)`,
      },
      text: {
        primary: WHITE,
        secondary: WHITE,
        disabled: DISABLED_GREY,
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: DARK_GREY,
        },
      },
      MuiSvgIcon: {
        root: {
          fill: WHITE,
        },
      },
      //to prevent user-agent stylesheet override
      MuiInputBase: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color',
          },
        },
      },
    },
  }),
);
