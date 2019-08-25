import React from 'react';
import {
  createMuiTheme,
} from '@material-ui/core/styles';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/styles';
import { create as jssCreate } from 'jss';
import jssExtendPlugin from 'jss-plugin-extend';

import GlobalCSS from './GlobalCSS';


// Material UI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2991b9',
    },
    secondary: {
      main: '#f9a753',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro, Helvetica Neue, Arial, sans-serif',
  },
  overrides: {
    MuiTooltip: {
      popper: {
        marginTop: '-0.5em',
      },
      tooltip: {
        padding: '0.5em 1em',
        fontSize: 13,
      },
    },
    MuiTypography: {
      h4: {
        fontWeight: 600,
        marginBottom: 50,
      },
      body1: {
        lineHeight: 1.6,
        wordSpacing: '.05em',
        margin: '1em 0',
      },
    },
  },
});

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
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        {children}
      </ThemeProvider>
    </StylesProvider>
  </React.Fragment>
);

export default Theme;
