import React from 'react';

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
//Menu
import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';
//Assets
import skyrEth from '../../assets/images/skyrETHocket.svg';
import whitecloud from '../../assets/images/whitecloud.svg';
import cloud from '../../assets/images/cloud.svg';
//Hook
import useWindowDimensions from '../useWindowDimensions';

const styles = {
  appContent: {
    flex: 1,
    direction: 'flex',
    position: 'relative',
  },
  back: {
    backgroundColor: 'rgba(25,12,77,1)',
    width: "100%",
    opacity: 1,
    position: "absolute",
    top: 100,
    left: 0,
    //"&:after": {
    //  content: '""',
    //  position: "absolute",
    //  top: 0,
    //  left: 0,
    //  width: "100%",
    //  height: "100%",
    //  opacity: 0.7,
    //  zIndex: -10,
    //},
  },
}

const Landing = (props) => {
  const { height, width } = useWindowDimensions();
  let isMobile = useMediaQuery("(max-width:750px)");

  return(
    <div className={styles.appContent}>
      <TopMenu />
      <Box sx={styles.back}>
        <Box
          sx={{
            backgroundColor: "rgba(25,12,77,1)",
            color: "white",
            mt: "15vh",
            height: height,
            width: "100%",
            ...(isMobile && {
              width: "10rem",
              mt: "65vh",
              m1: "2rem",
            }),
          }}
        >
          <Box 
            sx={{ 
              marginTop: "15%",
              marginLeft: "15%",
            }}
          >

            <Typography 
              style={{ 
                lineHeight: "14px",
              }} 
              variant={isMobile ? "h6" : "h4"}
            >
              <p> The first truly decentralised </p>
              <p> Ethereum staking pool. </p>
            </Typography>
            <Button 
              sx={{
                color: 'white',
                backgroundColor: '#FF990F',
                borderColor: '#FF990F',
              }}
              color="secondary" 
              variant="outlined"
              onClick={() => {
                window.open("https://stake.rocketpool.net", "_blank");
              }}
            >
              Stake Now
            </Button> 
          </Box>
          <Box sx={{
              backgroundImage: `url(${cloud}),-webkit-image-set(url(${whitecloud}) 1x)`,
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                width: "100%",
                height: "25%",
                backgroundImage: "linear-gradient(rgb(255,255,255,0), rgb(255,255,255,1))"
              }
            }}
          >
            <img
              src= {skyrEth}
            />
          </Box>  
        </Box>  
        <Footer />
      </Box>
    </div>
  )
}

export default Landing;
