import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
  /*brighter teal*/
    primary: {
      main: '#54EEFF',
      light: '#'
    },
    /*white*/
    secondary: {
      main: '#F2F2F2',

    },

    light: {
      main: '#c5cbcf',
    },

    info:{
      main: '#000000',
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    inherit: {
        main: '#01184A'
    },
    highlight: {
        main: '#c5cbcf'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#01184A',
    },
  },
  
  typography: {
    fontFamily: [
      '-apple-system',
      'Unite',
      'Montserrat',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    
    h2: {
      fontWeight:'700',
      padding: '0',
      mb: 0,
    },

    paragraph: {
      size: '16px',
      padding: '0',
    },
    h4: {
      fontWeight: '700',
    },

    
  },

});

export default theme;