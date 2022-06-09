// React + Material UI
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//Layout
import Landing from './pages/Landing';
//import Staking from './pages/Staking';

const Layout = (props) => {

  return(
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default Layout;
