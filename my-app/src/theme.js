import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01184A'
    },
    secondary: {
      main: '#A1F6FF',
    },
    inherit: {
        main: '#54EEFF',
    },
    highlight: {
        main: '#000000'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#01184A',
    },
  },
});

export default theme;