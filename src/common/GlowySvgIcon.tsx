import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { makeStyles, Theme } from '@material-ui/core/styles';


const GLOW_COLOR_VAR = '--glow-color';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: 'inherit',
    transition: 'color 500ms !important',
    transitionDelay: '100ms !important',
    '&:hover, .glow:hover > &': {
      color: `var(${GLOW_COLOR_VAR}, ${theme.palette.primary.main})`,
      transition: 'color 300ms',
      transitionDelay: '0ms !important',
    },
  },
}));

interface Props extends SvgIconProps {
  Icon: React.ElementType,
  glowColor?: string,
}

const GlowySvgIcon = ({
  Icon,
  glowColor,
  ...props
}: Props) => {
  const classes = useStyles();

  let style: any;
  if (glowColor) {
    style = {
      [GLOW_COLOR_VAR]: glowColor,
    };
  }

  return (
    <Icon
      style={style}
      classes={{
          root: classes.root,
        }}
      {...props}
    />
  );
};

export default GlowySvgIcon;
