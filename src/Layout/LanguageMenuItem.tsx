import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

import * as types from '../types';
import { setLanguageCode } from '../redux/cache';


const useStyles = makeStyles({
  root: {
    fontSize: '0.9em',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    paddingLeft: '0.5em',
    paddingRight: '2em',
  },
});

interface Props {
  language: types.Language,
  selected?: boolean,
  onClick: () => void,
};

const LanguageMenuItem = ({
  language,
  selected,
  onClick,
}: Props, ref: any) => {
  const classes = useStyles();
  return (
    <MenuItem
      className={classes.root}
      ref={ref}
      onClick={() => {
        onClick();
        setLanguageCode(language.code);
      }}
    >
      <Radio
        color="primary"
        checked={selected}
      />
      {language.label}
    </MenuItem>
  );
};

export default React.forwardRef(LanguageMenuItem);
