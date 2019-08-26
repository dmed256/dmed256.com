import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import constants from '../common/constants';


const useStyles = makeStyles({
  root: {
    padding: '0.5em 1.0em',
    transition: 'background-color 300ms, box-shadow 100ms',
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
});

interface Props {
  label: string,
  href: string,
}

const HeaderLink = ({
  label,
  href,
}: Props) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.root}
      to={href}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;
