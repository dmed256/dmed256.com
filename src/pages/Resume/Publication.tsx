import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Bold from '../../common/Bold';
import constants from '../../common/constants';


const useStyles = makeStyles({
  root: {
    margin: 0,
    marginTop: '0.5em',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: '1.5em',
    [constants.media.mobile]: {
      fontSize: 12,
    },
    [constants.media.print]: {
      marginTop: 0,
      fontSize: 12,
    },
  },
});

interface Props {
  me: string,
  authors: string,
}

const Publication = ({
  me,
  authors,
}: Props) => {
  const classes = useStyles();

  const str = authors.trim();
  const mePart = (
    <Bold key="me">
      {me}
    </Bold>
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

export default Publication;
