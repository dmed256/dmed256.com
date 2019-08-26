import React from 'react';
import classnames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ExternalLink, {
  ExternalLinkProps,
  ExternalLinkStyles,
} from './ExternalLink';
import constants from './constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&, &:visited': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
      fontWeight: 600,
      textDecoration: 'none',
    },
    "&$normal": {
      color: 'inherit',
      fontWeight: 300,
    },
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      textDecorationColor: `${theme.palette.secondary.main}88`,
    },
    [constants.media.print]: {
      '&, &:visited': {
        color: 'inherit',
        fontWeight: 'inherit',
        textDecoration: 'none !important',
      },
    },
  },
  normal: {},
}));

type Props = Omit<ExternalLinkProps, 'classes'> & Partial<ExternalLinkStyles> & {
  variant?: 'normal' | 'bold',
}

const InlineLink = ({
  variant,
  ...props
}: Props) => {
  const classes = useStyles();
  const propClasses: any = (props.classes || {});

  return (
    <ExternalLink
      {...{
        ...props,
        classes: {
          ...propClasses,
          root: classnames(propClasses.root,
                           classes.root,
                           variant === 'normal' && classes.normal),
        },
      }}
    />
  );
};

export default InlineLink;
