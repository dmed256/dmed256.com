import React from 'react';
import classnames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';

import InlineLink from '../../common/InlineLink';
import constants from '../../common/constants';


const SECTION_PADDING = 20;
const SECTION_PADDING_MIDDLE = 2 + (SECTION_PADDING / 2);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    marginTop: SECTION_PADDING,
    lineHeight: '1.5em',
    '&:first-child': {
      marginTop: 0,
    },
    [constants.media.print]: {
      fontSize: 12,
      marginTop: '0.7em',
    },
  },
  date: {
    position: 'relative',
    width: 100,
    marginBottom: -SECTION_PADDING,
    marginRight: 14,
    paddingRight: 14,
    borderRight: `1px solid ${theme.palette.grey[400]}`,
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'right',
    [constants.media.print]: {
      width: 80,
      fontSize: 11,
    },
  },
  start: {
    marginTop: SECTION_PADDING_MIDDLE,
    '&$hasEnd': {
      marginTop: 0,
    },
  },
  end: {
    '&$present': {
      color: theme.palette.primary.main,
      fontWeight: 400,
    },
    [constants.media.print]: {
      '&$present': {
        color: 'inherit',
      },
    },
  },
  dateless: {
    width: 0,
    '& $dot': {
      borderRadius: 0,
    },
  },
  dot: {
    position: 'absolute',
    width: 7,
    height: 7,
    right: -5,
    top: SECTION_PADDING,
    borderRadius: 100,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: 'white',
    '&$present': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
    },
    // The dot needs to be changed in phone + print
    [constants.media.mobile]: {
      top: '28px !important',
    },
    [constants.media.print]: {
      '&$present': {
        borderColor: `${theme.palette.grey[400]} !important`,
        backgroundColor: `${theme.palette.grey[300]} !important`,
      },
    },
  },
  content: {
    flex: 1,
    '& p': {
      margin: '0.5em 0',
      fontWeight: 300,
    },
    [constants.media.print]: {
      '& p': {
        margin: 0,
      },
    },
  },
  titleContainer: {
    margin: `${SECTION_PADDING_MIDDLE}px 0`,
    '&$hasLocation': {
      margin: 0,
    },
  },
  title: {
    fontWeight: 600,
  },
  location: {
    marginTop: '-0.2em',
    fontSize: 14,
    fontWeight: 300,
    fontStyle: 'italic',
    [constants.media.print]: {
      fontSize: 12,
      marginBottom: '0.2em',
    },
  },
  description: {
    fontWeight: 300,
  },
  hasLocation: {},
  hasEnd: {},
  present: {},
}));

interface Props {
  title: string,
  link?: string,
  date?: string,
  start?: string,
  end?: string,
  location?: string,
  children: React.ReactNode,
}

const ResumeSubsection = ({
  title,
  link,
  date,
  start,
  end,
  location,
  children,
}: Props) => {
  const classes = useStyles();

  const hasEnd = Boolean(end);
  const hasLocation = Boolean(location);
  const isPresent = (end === 'Present');
  const isDateless = (!date && !start && !end);

  let titleContent: any = title;
  if (link) {
    titleContent = (
      <InlineLink href={link}>
        {title}
      </InlineLink>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classnames(classes.date,
                                 isDateless && classes.dateless)}>
        <div className={classnames(classes.start,
                                   hasEnd && classes.hasEnd)}>
          {date || start}
        </div>
        <div className={classnames(classes.end,
                                   isPresent && classes.present)}>
          {end}
        </div>
        <div className={classnames(classes.dot,
                                   isPresent && classes.present)} />
      </div>
      <div className={classes.content}>
        <div className={classnames(classes.titleContainer,
                                   hasLocation && classes.hasLocation)}>
          <div className={classes.title}>
            {titleContent}
          </div>
          <div className={classes.location}>
            {location}
          </div>
        </div>
        <div className={classes.description}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ResumeSubsection;
