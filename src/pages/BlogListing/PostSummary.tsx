import React from 'react';
import moment from 'moment';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Tag from '../../common/Tag';


const SUMMARY_GAP = 30;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: `${SUMMARY_GAP}px 0`,
    '&:first-child': {
      paddingTop: 0,
      '& $divider': {
        marginTop: 9,
      },
      '& $dividerDot': {
        top: 0,
      },
    },
    '&:last-child': {
      paddingBottom: 0,
      '& $divider': {
        marginBottom: -20,
      },
    },
  },
  date: {
    width: 80,
    textAlign: 'right',
    color: theme.palette.primary.main,
    fontSize: '1.3em',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  divider: {
    position: 'relative',
    width: 1,
    margin: `-${SUMMARY_GAP}px 20px`,
    backgroundColor: theme.palette.grey[300],
  },
  dividerDot: {
    position: 'absolute',
    width: 9,
    height: 9,
    top: 38,
    left: -4,
    borderRadius: 100,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: '1.3em',
    letterSpacing: '1px',
  },
  timeToRead: {
    fontSize: '0.95em',
    opacity: 0.65,
    margin: '2px 0 12px 0',
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.7em',
    marginBottom: 25,
    '& > *': {
      margin: '0 0.3em',
    },
  },
}));

interface Props {
  title: string,
  date: string,
  minutesToRead: number,
  summary: string,
  tags: string[],
};

const PostSummary = ({
  title,
  date,
  minutesToRead,
  summary,
  tags,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {moment(date).format('MMM DD')}
      </div>
      <div className={classes.divider}>
        <div className={classes.dividerDot} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.timeToRead}>
          {`${minutesToRead} min read`}
        </div>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div>
          {summary}
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
