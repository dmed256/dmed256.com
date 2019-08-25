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
      main: '#f5cd3e',
    },
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
    <GlobalCSS />
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  </React.Fragment>
);

export default Theme;
