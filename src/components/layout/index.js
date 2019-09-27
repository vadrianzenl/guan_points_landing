import React from 'react';
import Preloader from '../preloader';
import Navigation from '../navigation';

const Layout  = ({ children }) => {
  return (
    <>
      <Preloader />
      <Navigation />
      {children}
    </>
  );
};

export default Layout;