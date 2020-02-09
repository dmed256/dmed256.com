import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import PostTitle from './PostTitle';
import * as types from '../../types';
import Tag from '../../common/Tag';


const SUMMARY_GAP = 10;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: `${SUMMARY_GAP}px 0`,
    '&:first-child': {
      paddingTop: 0,
    },
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.7em',
    marginRight: '1em',
    '& > *': {
      textAlign: 'center',
      margin: '0.2em',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.4em',
  },
  date: {
    opacity: 0.7,
    width: '7em',
    fontSize: '1em',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '1em',
    letterSpacing: '1px',
  },
  content: {
    fontSize: '0.9em',
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
      <div className={classes.contentContainer}>
        <div className={classes.titleContainer}>
          <div className={classes.date}>
            {post.date.format('MMM DD, YYYY')}
          </div>
          <PostTitle
            classes={{ root: classes.title }}
            post={post}
          />
        </div>
      </div>
      <div className={classes.tags}>
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} compact />
        ))}
      </div>
    </div>
  );
};

export default CompactPostSummary;
