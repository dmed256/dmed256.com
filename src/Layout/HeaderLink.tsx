import React from 'react';
import classnames from 'classnames';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

import constants from '../common/constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '0.5em 1.0em',
    transition: 'background-color 300ms, border-color 300ms, box-shadow 100ms',
    borderBottom: '1px solid transparent',
    '&$active': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
      '&:hover, &:active': {
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
      },
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.18)',
      boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.15)',
    },
    '@media (pointer: coarse)': {
      '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.18) !important',
        boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.15) !important',
      },
    },
    [constants.media.mobile]: {
      padding: '1em',
    },
  },
  active: {},
}));

interface Props extends RouteComponentProps<any> {
  label: string,
  href: string,
}

const HeaderLink = ({
  location,
  label,
  href,
}: Props) => {
  const classes = useStyles();

  const active = (
    location.pathname === href
      || location.pathname.startsWith(href + '/')
  );

  return (
    <Link
      className={classnames(classes.root,
                            active && classes.active)}
      to={href}
    >
      {label}
    </Link>
  );
};

export default withRouter(HeaderLink);
