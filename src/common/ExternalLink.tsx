import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';


const styles = createStyles({
  root: {},
});

export type ExternalLinkStyles = WithStyles<typeof styles>;

export interface ExternalLinkProps extends ExternalLinkStyles {
  href: string,
  children: React.ReactNode,
}

const ExternalLink = ({
  classes,
  href,
  children,
}: ExternalLinkProps) => (
  <a
    className={classes.root}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default withStyles(styles)(ExternalLink);
