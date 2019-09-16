import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ExternalLink from '../common/ExternalLink';
import GlowySvgIcon from '../common/GlowySvgIcon';
import social from '../common/social';
import {
  EmailIconWithClipboard,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../icons';
import constants from '../common/constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [constants.media.print]: {
      display: 'none',
    },
  },
  divider: {
    marginTop: constants.headerGap,
    [constants.media.mobile]: {
      marginTop: constants.mobile.headerGap,
    },
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
    '& > *': {
      color: theme.palette.grey[600],
    },
    '& > *:not(:first-child)': {
      marginLeft: '2em',
    },
    [constants.media.mobile]: {
      padding: '20px 0 0',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <div className={classes.icons}>
        <EmailIconWithClipboard />
        <ExternalLink href={social.github.link}>
          <GlowySvgIcon
            Icon={GithubIcon}
            glowColor={social.github.color}
          />
        </ExternalLink>
        <ExternalLink href={social.linkedin.link}>
          <GlowySvgIcon
            Icon={LinkedinIcon}
            glowColor={social.linkedin.color}
          />
        </ExternalLink>
        <ExternalLink href={social.twitter.link}>
          <GlowySvgIcon
            Icon={TwitterIcon}
            glowColor={social.twitter.color}
          />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Footer;
