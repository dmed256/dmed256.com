import React from 'react';
import classnames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';

import constants from '../../common/constants';


const SECTION_PADDING = 20;

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
    marginRight: 14,
    paddingRight: 14,
    marginTop: -SECTION_PADDING,
    paddingTop: SECTION_PADDING,
    borderRight: `1px solid ${theme.palette.grey[400]}`,
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'right',
    [constants.media.print]: {
      width: 80,
      fontSize: 11,
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
    top: SECTION_PADDING + 8,
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
  present: {},
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
    margin: '0.5em 0',
    fontWeight: 300,
  },
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

  const isPresent = (end === 'Present');
  const isDateless = (!date && !start && !end);

  let titleContent: any = title;
  if (link) {
    titleContent = (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classnames(classes.date,
                                 isDateless && classes.dateless)}>
        <div>{date || start}</div>
        <div className={classnames(classes.end,
                                   isPresent && classes.present)}>
          {end}
        </div>
        <div className={classnames(classes.dot,
                                   isPresent && classes.present)} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          {titleContent}
        </div>
        <div className={classes.location}>
          {location}
        </div>
        <div className={classes.description}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ResumeSubsection;
