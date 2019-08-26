import React from 'react';
import classnames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';

import constants from '../../common/constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    marginTop: 24,
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
    marginTop: -24,
    paddingTop: 24,
    borderRight: `1px solid ${theme.palette.grey[400]}`,
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'right',
    '&.dateless': {
      width: 0,
      '& $dot': {
        borderRadius: 0,
      },
    },
    [constants.media.print]: {
      width: 80,
      fontSize: 11,
    },
  },
  dot: {
    position: 'absolute',
    width: 7,
    height: 7,
    right: -5,
    top: 31,
    borderRadius: 100,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: 'white',
    '&.present': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
    },
    // The dot needs to be changed in phone + print
    [constants.media.mobile]: {
      top: '28px !important',
    },
    [constants.media.print]: {
      '&.present': {
        borderColor: `${theme.palette.grey[400]} !important`,
        backgroundColor: `${theme.palette.background.paper} !important`,
      },
    },
  },
  content: {
    flex: 1,
    '& .title': {
      fontWeight: 600,
    },
    '& .location': {
      marginTop: '-0.2em',
      fontSize: 14,
      fontWeight: 300,
      fontStyle: 'italic',
    },
    '& .description': {
      fontWeight: 300,
      '& ul': {
        paddingLeft: 18,
      },
    },
    '& .description ul, p': {
      margin: '0.5em 0',
    },
    [constants.media.print]: {
      '& .location': {
        fontSize: 12,
        marginBottom: '0.2em',
      },
      '& .description ul, p': {
        margin: 0,
      },
    },
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
                                 'subsection-date',
                                 (!date && !start && !end) && 'dateless')}>
        <div>{date || start}</div>
        <div>{end}</div>
        <div className={classnames(classes.dot, 'subsection-dot',
                                   (end === 'Present') && 'present')} />
      </div>
      <div className={classes.content}>
        <div className="title">
          {titleContent}
        </div>
        <div className="location">
          {location}
        </div>
        <div className="description">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ResumeSubsection;
