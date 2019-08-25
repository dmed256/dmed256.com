import {
  withStyles,
  Theme,
} from '@material-ui/core/styles';

import constants from '../common/constants';


const GlobalCSS = withStyles((theme: Theme) => ({
  '@global': {
    'html, body, #root': {
      width: '100vw',
      height: '100vh',
      margin: 0,
      color: '#34495e',
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
    ':root': {
      '--theme-primary-color': theme.palette.primary.main,
      '--theme-secondary-color': theme.palette.secondary.main,
    },
  },
}))(() => null);

export default GlobalCSS;
