import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => {
  return {
    container: {
      position: 'relative',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '250px',
      margin: '5em auto 0',
      padding: '15px 40px 45px',
      boxShadow: '0px 3px 9px 0px rgba(148, 146, 148, 0.86)',
      borderRadius: '3px',
      color: theme.palette.text.primary,
    },
    backBtn: {
      position: 'absolute',
      top: '0',
      left: '1.5em',
      '& a': {
        color: theme.palette.text.primary,
        '& :hover': {
          color: theme.palette.text.hover,
        },
      },
    },
  };
});
