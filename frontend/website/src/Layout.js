// React + Material UI
import React from 'react';
//Layout
import Landing from './pages/Landing';
import Staking from './pages/Staking';
//Menu
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';

const Layout = () => {
  //const { classes } = props;
  
  return(
    <div>
      <TopMenu />
      <Landing />
      <Footer />
    </div>
  )
}

export default Layout;
