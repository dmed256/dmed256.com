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
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>>
        <GlobalCSS />
        {children}
      </ThemeProvider>
    </StylesProvider>
  </React.Fragment>
);

export default Theme;
