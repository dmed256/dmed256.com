import React from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../../icons';
import GlowySvgIcon from '../../common/GlowySvgIcon';
import InlineLink from '../../common/InlineLink';
import * as Lang from '../../common/Lang';
import constants from '../../common/constants';
import social from '../../common/social';


const styles = {
  root: {
    display: 'flex',
    alignItems: 'center' as 'center',
  },
  profile: {
    flex: 1,
    '& .name': {
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: 2,
      textTransform: 'uppercase' as 'uppercase',
      marginLeft: -2,
    },
    '& .title': {
      fontSize: 20,
      fontWeight: 300,
      letterSpacing: 2,
      textTransform: 'uppercase' as 'uppercase',
    },
    [constants.media.mobile]: {
      textAlign: 'center' as 'center',
      '& .name': {
        fontSize: 20,
      },
      '& .title': {
        marginTop: 10,
        fontSize: 14,
      },
    },
    [constants.media.print]: {
      textAlign: 'left !important' as any,
      '& .name': {
        fontSize: '30px !important',
      },
      '& .title': {
        marginTop: '0 !important',
        fontSize: '18px !important',
      },
    },
  },
  info: {
    paddingLeft: 30,
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    '&:first-child': {
      marginTop: 0,
    },
    '& > svg': {
      marginRight: 14,
      fontSize: 18,
    },
    '& > a': {
      fontSize: 14,
    },
    [constants.media.mobile]: {
      '& .svg': {
        fontSize: 16,
        marginRight: 12,
      },
      '& > a': {
        fontSize: 12,
      },
    },
    [constants.media.print]: {
      '& .svg': {
        fontSize: '12px !important',
        marginRight: 12,
      },
      '& > a': {
        fontSize: 12,
      },
    },
  },
}

// Either link or email
const getLabelLink = (label: string) => {
  if (label.search(/https?:/) === 0) {
    return label;
  }
  return `mailto:${label}`;
}

interface Props {
  classes: any,
}

const Header = ({ classes }: Props) => {
  const socialInfo = [
    { Icon: MailOutlineIcon, label: social.getEmail() },
    { Icon: GithubIcon, label: social.github.link, color: social.github.color },
    { Icon: LinkedinIcon, label: social.linkedin.link, color: social.linkedin.color },
    { Icon: TwitterIcon, label: social.twitter.link, color: social.twitter.color },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <div className="name">
          David Medina
        </div>
        <div className="title">
          <Lang.Translate>
            <Lang.English>
              Software Engineer
            </Lang.English>
            <Lang.Chinese>
              Software Engineer
            </Lang.Chinese>
          </Lang.Translate>
        </div>
      </div>
      <div className={classes.info}>
        {
          socialInfo.map(({ Icon, label, color }) => (
            <div
              key={label}
              className={classnames(classes.infoItem, 'glow')}
            >
              <GlowySvgIcon
                Icon={Icon}
                glowColor={color}
              />
              <InlineLink
                href={getLabelLink(label)}
                variant="normal"
              >
                {label}
              </InlineLink>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
