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
import social from '../../common/social';


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
  const icons = [
    { Icon: MailOutlineIcon, label: social.getEmail() },
    { Icon: GithubIcon, label: social.github.link, color: social.github.color },
    { Icon: TwitterIcon, label: social.twitter.link, color: social.twitter.color },
    { Icon: LinkedinIcon, label: social.linkedin.link, color: social.linkedin.color },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.profile}>
        <div className="name">
          David Medina
        </div>
        <div className="title">
          Software Engineer
        </div>
      </div>
      <div className={classes.info}>
        {
          icons.map(({ Icon, label, color }) => (
            <div
              key={label}
              className={classnames(classes.infoItem, 'glow')}
            >
              <GlowySvgIcon
                Icon={Icon}
                glowColor={color}
              />
              <InlineLink
                href={getLabelLink(label as string)}
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
    '@media (max-width: 700px)': {
      textAlign: 'center' as 'center',
      '& .name': {
        fontSize: 20,
      },
      '& .title': {
        marginTop: 10,
        fontSize: 14,
      },
    },
    '@media print': {
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
      color: 'var(--theme-grey, #34495e)',
    },
    '& > .link': {
      color: 'var(--theme-grey, #34495e)',
      fontWeight: 300,
      fontSize: 14,
      '&:hover': {
        color: 'var(--theme-primary-color, #2980b9)',
      },
    },
    '@media (max-width: 700px)': {
      '& .svg': {
        fontSize: 16,
        marginRight: 12,
      },
      '& .link': {
        fontSize: 12,
      },
    },
    '@media print': {
      '& .svg': {
        fontSize: '12px !important',
        marginRight: 12,
      },
      '& .link': {
        fontSize: 12,
      },
    },
  },
}

export default withStyles(styles)(Header);
