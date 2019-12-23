import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const tealTheme = createMuiTheme({
  palette: {
    primary: { main: teal[500] },
    text: { primary: teal[500], hover: '#6d1b7b' },
  },
});
