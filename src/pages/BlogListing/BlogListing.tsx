import React from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PostTimeline from './PostTimeline';
import CompactPostTimeline from './CompactPostTimeline';
import * as types from '../../types';
import constants from '../../common/constants';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [constants.media.mobile]: {
      marginTop: 10,
    },
  },
  title: {
    marginBottom: 50,
    [constants.media.mobile]: {
      display: 'none',
    }
  },
});

interface Props {
  postView: types.PostView,
}

const BlogListing = ({
  postView,
}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h4"
      >
        Posts
      </Typography>
      {
        (postView === 'compact')
          ? <CompactPostTimeline />
          : <PostTimeline />
      }
    </div>
  );
};

export default connect((state: types.redux.State) => ({
  postView: state.cache.postView,
}))(BlogListing);
