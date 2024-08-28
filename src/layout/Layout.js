import React from 'react';
import NavigationMenuBar from '../Components/NavigationMenu';

const Layout = ({ children }) => {
  return (
    <>
   
      <main style={{ paddingTop: '50px' }}> {/* Adjust padding to match AppBar height */}
        {children}
      </main>
    </>
  );
};

export default Layout;
