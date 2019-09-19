import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as types from '../../types';
import Tag from '../../common/Tag';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  date: {
    width: 80,
    textAlign: 'right',
    color: theme.palette.primary.main,
    fontSize: '1.3em',
    letterSpacing: '1px',
    textTransform: 'uppercase',
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
  post: types.PostSummary,
};

const CompactPostSummary = ({
  post,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {post.date.format('MMM DD')}
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          {post.title}
        </div>
        <div className={classes.timeToRead}>
          {`${post.minutesToRead} min read`}
        </div>
        <div className={classes.tags}>
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div>
          {post.summary}
        </div>
      </div>
    </div>
  );
};

export default CompactPostSummary;
