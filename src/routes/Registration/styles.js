import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { colors } from '../../common/colors';

export const styles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '250px',
    margin: '0 auto',
  },
  button: {
    backgroundColor: colors.primaryBtnBg,
    color: colors.primaryBtnTextColor,
    '&:hover': {
      backgroundColor: colors.primaryBtnBgHover,
    },
  },
}));

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: colors.primaryColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.primaryInputBorderColor,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: colors.primaryColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.primaryInputBorderColor,
      },
    },
  },
})(TextField);
