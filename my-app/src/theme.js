import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
  /*brighter teal*/
    primary: {
      main: '#54EEFF',
    },
    /*white*/
    secondary: {
      main: '#F2F2F2',
    },
    inherit: {
        main: '#01184A'
    },
    highlight: {
        main: '#F2F2F2'
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
  },

});

export default theme;