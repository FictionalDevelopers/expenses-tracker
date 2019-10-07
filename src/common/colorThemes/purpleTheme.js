import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export const purpleTheme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    text: { primary: purple[500], secondary: purple[200] },
  },
});
