import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import * as types from '../../types';

interface Props {
  classes: any,
  tokens: types.Token[],
  me: string,
  authors: string,
}

const Publication = ({
  classes,
  tokens,
  me,
  authors,
}: Props) => {
  const str = authors.trim();
  const mePart = (
    <span key="me" className={classes.me}>
      {me}
    </span>
  )

  const startsWithMe = str.startsWith(me);
  let content: any;
  if (startsWithMe || str.endsWith(me)) {
    const a = (
      <span key="a1">
        {str.replace(me, '')}
      </span>
    );
    content = [];
    if (startsWithMe) {
      content.push(mePart);
      content.push(a);
    } else {
      content.push(a);
      content.push(mePart);
    }
  } else {
    const parts = str.split(me);
    content = (
      <span key="a1">
        {parts[0]}
        {mePart}
        {parts[1]}
      </span>
    );
  }

  return (
    <div className={classes.root}>
      {content}
    </div>
  );
};

const styles = {
  root: {
    margin: 0,
    marginTop: '0.5em',
    fontSize: 14,
    fontStyle: 'italic' as 'italic',
    lineHeight: '1.5em',
    '@media (max-width: 700px)': {
      fontSize: 12,
    },
    '@media print': {
      marginTop: 0,
      fontSize: 12,
    },
  },
  me: {
    color: 'var(--theme-strong, #19a98a)',
    '@media print': {
      color: 'inherit',
      fontWeight: 400,
    },
  },
};

export default withStyles(styles)(Publication);
