import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import classnames from '../../../classnames';
import Tokens from '../../Tokens';
import * as types from '../../types';

interface Props {
  classes: any,
  tokens: types.Token[],
  title: string,
  link?: string,
  date?: string,
  start?: string,
  end?: string,
  location?: string,
}

const SubSection = ({
  classes,
  tokens,
  title,
  link,
  date,
  start,
  end,
  location,
}: Props) => {
  let titleContent: any = title;
  if (link) {
    titleContent = (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }
  return (
    <div className={classes.root}>
      <div className={classnames(classes.date,
                                 'subsection-date',
                                 (!date && !start && !end) && 'dateless')}>
        <div>{date || start}</div>
        <div>{end}</div>
        <div className={classnames(classes.dot, 'subsection-dot',
                                   (end === 'Present') && 'present')} />
      </div>
      <div className={classes.content}>
        <div className="title">
          {titleContent}
        </div>
        <div className="location">
          {location}
        </div>
        <div className="description">
          <Tokens tokens={tokens} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
    marginTop: 24,
    lineHeight: '1.5em',
    '&:first-child': {
      marginTop: 0,
    },
    '@media print': {
      fontSize: 12,
      marginTop: '0.7em',
    },
  },
  date: {
    position: 'relative' as 'relative',
    width: 100,
    marginRight: 14,
    paddingRight: 14,
    marginTop: -24,
    paddingTop: 24,
    borderRight: '1px solid #c3c8ce',
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'right' as 'right',
    '&.dateless': {
      width: 0,
      '& $dot': {
        borderRadius: 0,
      },
    },
    '@media print': {
      width: 80,
      fontSize: 11,
    },
  },
  dot: {
    position: 'absolute' as 'absolute',
    width: 7,
    height: 7,
    right: -5,
    top: 31,
    borderRadius: 100,
    border: '1px solid #c3c8ce',
    backgroundColor: 'white',
    '&.present': {
      borderColor: 'var(--theme-primary-color, #2980b9)',
      backgroundColor: 'var(--theme-primary-color, #2980b9)',
    },
    // The dot needs to be changed in phone + print
    '@media(max-width: 700px)': {
      top: '28px !important',
    },
    '@media print': {
      '&.present': {
        borderColor: '#c3c8ce !important',
        backgroundColor: 'white !important',
      },
    },
  },
  content: {
    flex: 1,
    '& .title': {
      fontWeight: 600,
    },
    '& .location': {
      marginTop: '-0.2em',
      fontSize: 14,
      fontWeight: 300,
      fontStyle: 'italic' as 'italic',
    },
    '& .description': {
      fontWeight: 300,
      '& ul': {
        paddingLeft: 18,
      },
    },
    '& .description ul, p': {
      margin: '0.5em 0',
    },
    '@media print': {
      '& .location': {
        fontSize: 12,
        marginBottom: '0.2em',
      },
      '& .description ul, p': {
        margin: 0,
      },
    },
  },
}

const SubSectionWithStyles = withStyles(styles)(SubSection);

export default SubSectionWithStyles;
