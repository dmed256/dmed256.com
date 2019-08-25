import {
  withStyles,
  Theme,
} from '@material-ui/core/styles';

import constants from './constants';


const GlobalCSS = withStyles((theme: Theme) => ({
  '@global': {
    'html, body, #root': {
      width: '100vw',
      height: '100vh',
      margin: 0,
      fontFamily: 'Source Sans Pro, Helvetica Neue, Arial, sans-serif',
      backgroundColor: theme.palette.grey[100],
      [constants.media.mobile]: {
        fontSize: 12,
        backgroundColor: theme.palette.background.paper,
      },
      [constants.media.print]: {
        margin: 0,
        backgroundColor: 'white',
      },
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
    },
    ':focus': {
      outline: 'none',
    },
  },
}))(() => null);

export default GlobalCSS;
