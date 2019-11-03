import { makeStyles } from '@material-ui/core/styles';
import { purpleTheme } from '../../common/colorThemes/purpleTheme';

export const theme = purpleTheme;

export const styles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
