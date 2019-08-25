import React from 'react';
import {
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/styles';
import { create as jssCreate } from 'jss';
import jssExtendPlugin from 'jss-plugin-extend';

import constants from './constants';


// Material UI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2991b9',
    },
    secondary: {
      main: '#f5cd3e',
    },
  },
});

// CSS Applied to global DOM nodes
const GlobalCSS = withStyles({
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
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
    },
    ':focus': {
      outline: 'none',
    },
  },
})(() => null);

// JSS Creation
const jss = jssCreate({
	plugins: [
    jssExtendPlugin(),
    ...jssPreset().plugins,
  ],
});

interface Props {
  children: React.ReactNode,
}

const Theme = ({
  children,
}: Props) => (
  <React.Fragment>
    <GlobalCSS />
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  </React.Fragment>
);

export default Theme;
