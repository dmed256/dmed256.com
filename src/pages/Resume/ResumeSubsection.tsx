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
    lineHeight: '1.5em',
    '&:first-child': {
      '& $divider': {
        marginTop: SECTION_PADDING,
        [constants.media.mobile]: {
          marginTop: SECTION_PADDING_MIDDLE,
        },
      },
      '& $dividerDot': {
        top: -1,
      },
    },
    [constants.media.mobile]: {
      fontSize: 12,
    },
  },
  date: {
    position: 'relative',
    width: 100,
    marginBottom: -SECTION_PADDING,
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'right',
    [constants.media.mobile]: {
      width: 80,
      fontSize: 11,
    },
  },
  start: {
    marginTop: SECTION_PADDING_MIDDLE,
    [constants.media.mobile]: {
      marginTop: SECTION_PADDING_MIDDLE / 2,
    },
  },
  end: {
    '&$present': {
      color: theme.palette.primary.main,
      fontWeight: 400,
    },
    [constants.media.mobile]: {
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
  divider: {
    position: 'relative',
    width: 1,
    margin: `-${SECTION_PADDING}px 20px`,
    backgroundColor: theme.palette.grey[300],
  },
  dividerDot: {
    position: 'absolute',
    width: 9,
    height: 9,
    top: 40,
    left: -5,
    borderRadius: 100,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: 'white',
    '&$present': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
    },
    [constants.media.mobile]: {
      width: 5,
      height: 5,
      left: -3,
      top: 31,
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
    [constants.media.mobile]: {
      '& p': {
        margin: 0,
      },
    },
  },
  titleContainer: {
    margin: `${SECTION_PADDING_MIDDLE}px 0`,
    [constants.media.mobile]: {
      marginTop: SECTION_PADDING_MIDDLE / 2,
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
    [constants.media.mobile]: {
      fontSize: 11,
      marginBottom: '0.2em',
    },
  },
  description: {
    fontWeight: 300,
  },
  present: {},
}));

interface Props {
  title: string,
  link?: string,
  date?: string,
  start?: string,
  end?: string,
  location?: string,
  children?: React.ReactNode,
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
      <InlineLink href={link}>
        {title}
      </InlineLink>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classnames(classes.date,
                                 isDateless && classes.dateless)}>
        <div className={classes.start}>
          {date || start}
        </div>
        <div className={classnames(classes.end,
                                   isPresent && classes.present)}>
          {end}
        </div>
      </div>
      <div className={classes.divider}>
        <div className={classnames(classes.dividerDot,
                                   isPresent && classes.present)} />
      </div>
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>
            {titleContent}
          </div>
          <div className={classes.location}>
            {location}
          </div>
        </div>
        {children && (
          <div className={classes.description}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeSubsection;
