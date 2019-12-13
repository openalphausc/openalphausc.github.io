import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#54EEFF',
    },
    secondary: {
      main: '#A1F6FF',
    },
    inherit: {
        main: '#01184A'
    },
    highlight: {
        main: '#FFFFFF'
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