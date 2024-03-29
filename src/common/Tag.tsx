import React from 'react';
import classnames from 'classnames';
import queryString from 'query-string';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles,
} from '@material-ui/core/styles';


const styles = (theme: Theme) => (
  createStyles({
    root: {
      display: 'block',
      cursor: 'pointer',
      padding: '0.5em 1em',
      borderRadius: '0.2em',
      backgroundColor: theme.palette.grey[300],
      textTransform: 'uppercase',
      '&$compact': {
        padding: '0.3em 0.7em',
      },
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
    compact: {},
  })
);

interface Props extends RouteComponentProps<any>, WithStyles<typeof styles> {
  label: string,
  compact?: boolean,
}

const Tag = ({
  location,
  classes,
  label,
  compact,
}: Props) => {
  const search = queryString.parse(location.search);

  const safeLabel = decodeURIComponent(label.toLowerCase());
  const active = (search.tag === safeLabel);

  return (
    <Link
      className={classnames(classes.root,
                            active && classes.active,
                            compact && classes.compact)}
      to={{ search: active ? '' : `?tag=${safeLabel}` }}
    >
      {label}
    </Link>
  );
};

export default withStyles(styles)(withRouter(Tag));
