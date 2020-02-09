import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Background from './Background';
import Footer from './Footer';
import Header from './Header';
import Paper from './Paper';
import Theme from './Theme';


const useStyles = makeStyles({
  content: {
    flex: 1,
  },
});

interface Props {
  children: React.ReactNode,
}

const Layout = ({
  children,
}: Props) => {
  const classes = useStyles();
  return (
    <Theme>
      <Header />
      <Background>
        <Paper>
          <div className={classes.content}>
            {children}
          </div>
          <Footer />
        </Paper>
      </Background>
    </Theme>
  );
};

export default Layout;
