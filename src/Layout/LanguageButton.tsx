import React from 'react';
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import TranslateIcon from '@material-ui/icons/Translate';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

import * as types from '../types';
import languages from '../common/languages';
import LanguageMenuItem from './LanguageMenuItem';


const styles = createStyles({
  root: {},
});

interface Props extends WithStyles<typeof styles> {
  languageCode: types.LanguageCode,
}

const LanguageButton = ({
  languageCode,
  classes,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const onClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        color="inherit"
        classes={{
          root: classes.root,
        }}
        onClick={onClick}
        disableFocusRipple
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
        PaperProps={{
          square: true,
        }}
        onClose={onClose}
        keepMounted
      >
        {languages.map((language) => (
          <LanguageMenuItem
            key={language.code}
            language={language}
            selected={language.code === languageCode}
            onClick={onClose}
          />
        ))}
      </Menu>
    </>
  );
};

export default connect((state: types.redux.State) => ({
  languageCode: state.cache.languageCode,
}))(
  withStyles(styles)(LanguageButton)
);
