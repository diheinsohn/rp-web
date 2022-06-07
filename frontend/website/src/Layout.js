// React + Material UI
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Layout
import Landing from 'pages/Landing';
import Staking from 'pages/Staking';
//Menu
import TopMenu from 'components/TopMenu/TopMenu';
import Footer from 'components/Footer/Footer';

const Layout = (props) => {
  const { classes } = props;
  
  return(
    <Router style={{display: 'flex'}}>
      <div className={classes.appContent}>
        <TopMenu />
        <Landing />
          <Route path="/" component={Landing} />
          <Route path="/staking" component={Staking} />
        <Footer />
      </div>
    </Router>
  )
}

export default Layout;
