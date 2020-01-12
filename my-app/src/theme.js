import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2F2F2'
    },
    secondary: {
      main: '#A1F6FF',
    },
    inherit: {
        main: '#54EEFF',
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
    black: {
      main: '#000000',
    },
  },
});

export default theme;