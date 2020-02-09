import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

import NotFoundPage from '../pages/NotFoundPage';
import { postsBySlug } from '../posts';
import Tag from '../common/Tag';


const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: 10,
  },
  metadataContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  date: {
    color: theme.palette.primary.main,
    fontSize: '1.3em',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginRight: '1em',
  },
  timeToRead: {
    fontSize: '1.3em',
    opacity: 0.7,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.7em',
    marginTop: 10,
    '& > *': {
      margin: '0 0.3em',
      '&:first-child': {
        marginLeft: 0,
      },
    },
  },
  content: {
    marginTop: 30,
  },
}));

interface Props {
  match: {
    params: {
      postSlug: string,
    },
  },
}

const BlogPost = ({
  match: {
    params: { postSlug },
  },
}: Props) => {
  const classes = useStyles();
  const post = postsBySlug[postSlug];

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Typography
        className={classes.title}
        variant="h4"
      >
        {post.title}
      </Typography>
      <div className={classes.metadataContainer}>
        <div className={classes.date}>
          {post.date.format('MMMM DD, YYYY')}
        </div>
        <div className={classes.timeToRead}>
          {`~${post.minutesToRead} min read`}
        </div>
      </div>
      <div className={classes.tags}>
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className={classes.content}>
        <post.component />
      </div>
    </div>
  );
};

export default BlogPost;
