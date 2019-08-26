import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import constants from '../../common/constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    position: 'relative',
    marginTop: 50,
    // Fake border to keep the bold line in the same page
    borderTop: `1px solid ${theme.palette.background.paper}`,
    [constants.media.mobile]: {
      marginTop: 30,
    },
  },
  innerRoot: {
    display: 'flex',
    borderTop: '1px solid #c2c8ce',
    paddingTop: 20,
    [constants.media.mobile]: {
      flexDirection: 'column',
    },
    [constants.media.print]: {
      flexDirection: 'row !important' as 'row',
    },
  },
  titleContainer: {
    width: 140,
    marginRight: 20,
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '1.1em',
    [constants.media.mobile]: {
      width: '100%',
      fontSize: 16,
      marginBottom: 20,
    },
    [constants.media.print]: {
      width: '110px !important' as '110px',
      fontSize: '15px !important' as '15px',
      marginBottom: '0 !important' as '0',
    },
  },
  title: {
    display: 'inline-block',
    borderTop: '3px solid #34495e',
    paddingTop: 20,
    marginTop: -22,
  },
  content: {
    flex: 1,
    // End the divider line early and move the dot accordingly
    '& > div:first-child .subsection-date': {
      marginTop: 0,
      paddingTop: 0,
      '& .subsection-dot': {
        top: 7,
      },
    },
    '& > ul': {
      margin: 0,
    },
    '& > p': {
      margin: 0,
      letterSpacing: 0,
      '&:not(:first-child)': {
        marginTop: 8,
      },
    },
    // The dot needs to be changed in phone + print
    [constants.media.mobile]: {
      '& > div:first-child  .subsection-date .subsection-dot': {
        top: '4px !important' as '4px',
      },
    },
    [constants.media.print]: {
      '& > p': {
        fontSize: 10,
        '&:not(:first-child)': {
          marginTop: 5,
        },
      },
    },
  },
}));

interface Props {
  title: string,
  children: React.ReactNode,
}

const ResumeSection = ({
  title,
  children,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.innerRoot}>
        <div className={classes.titleContainer}>
          <span className={classes.title}>
            {title}
          </span>
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
