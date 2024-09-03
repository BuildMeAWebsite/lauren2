import React from 'react';
import NavigationMenuBar from '../Components/NavigationMenu';
import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  return (
    <>
   <NavigationMenuBar/>
      <main style={{ paddingTop: '5px' }}> {/* Adjust padding to match AppBar height */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
