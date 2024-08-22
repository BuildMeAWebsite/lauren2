import React from 'react';
import NavigationMenuBar from '../Components/NavigationMenu';

const Layout = ({ children }) => {
  return (
    <>
      <NavigationMenuBar />
      <main style={{ paddingTop: '64px' }}> {/* Adjust padding to match AppBar height */}
        {children}
      </main>
    </>
  );
};

export default Layout;
