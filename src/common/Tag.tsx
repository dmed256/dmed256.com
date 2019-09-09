import React from 'react';
import classnames from 'classnames';
import queryString from 'query-string';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'block',
    cursor: 'pointer',
    padding: '0.5em 1em',
    borderRadius: '0.2em',
    backgroundColor: theme.palette.grey[300],
    textTransform: 'uppercase',
    '&$active, &:hover': {
      color: theme.palette.getContrastText(
        theme.palette.primary.main,
      ),
      backgroundColor: theme.palette.primary.main,
    },
    '&$active': {
      '&:hover': {
        color: theme.palette.getContrastText(
          theme.palette.primary.dark,
        ),
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  active: {},
}));

interface Props extends RouteComponentProps<any> {
  label: string,
}

const Tag = ({
  label,
  location,
}: Props) => {
  const classes = useStyles();
  const search = queryString.parse(location.search);

  const safeLabel = decodeURIComponent(label.toLowerCase());
  const active = (search.tag === safeLabel);

  return (
    <Link
      className={classnames(classes.root,
                            active && classes.active)}
      to={{ search: active ? '' : `?tag=${safeLabel}` }}
    >
      {label}
    </Link>
  );
};

export default withRouter(Tag);
