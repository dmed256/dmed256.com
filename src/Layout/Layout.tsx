import React from 'react';

import Background from './Background';
import Footer from './Footer';
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
        <Footer />
      </Paper>
    </Background>
  </Theme>
);

export default Layout;
