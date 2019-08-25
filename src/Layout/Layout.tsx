import React from 'react';

import Background from './Background';
import Header from './Header';
import Paper from './Paper';
import Theme from './Theme';


interface Props {
  children: React.ReactNode,
}

const Layout = ({
  children,
}: Props) => (
  <Theme>
    <Header />
    <Background>
      <Paper>
        {children}
      </Paper>
    </Background>
  </Theme>
);

export default Layout;
