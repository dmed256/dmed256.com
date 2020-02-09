import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import PostTitle from './PostTitle';
import * as types from '../../types';
import Tag from '../../common/Tag';
import constants from '../../common/constants';


const SUMMARY_GAP = 15;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: `${SUMMARY_GAP}px 0`,
    '&:first-child': {
      paddingTop: 0,
      '& $divider': {
        marginTop: 6,
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
    margin: `-30px 35px -${SUMMARY_GAP}px 15px`,
    backgroundColor: theme.palette.grey[300],
    [constants.media.mobile]: {
      margin: `-32px 35px -${SUMMARY_GAP}px 15px`,
    },
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
    marginBottom: '0.7em',
    '& > *': {
      margin: '0 0.3em',
    },
  },
}));

interface Props {
  post: types.PostSummary,
};

const PostSummary = ({
  post,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {post.date.format('MMM DD')}
      </div>
      <div className={classes.divider}>
        <div className={classes.dividerDot} />
      </div>
      <div className={classes.content}>
        <PostTitle
          classes={{ root: classes.title }}
          post={post}
        />
        <div className={classes.timeToRead}>
          {`${post.minutesToRead} min read`}
        </div>
        <div className={classes.tags}>
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
