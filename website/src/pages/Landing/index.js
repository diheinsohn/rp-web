import React from 'react';

import {
  Box,
  Button,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
//Menu
import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';
//Assets
import skyrEth from '../../assets/images/skyrETHocket2.svg';
import whitecloud from '../../assets/images/whitecloud.svg';
import cloud from '../../assets/images/cloud.svg';
import GreyOval from '../../assets/images/Oval + Oval Copy Mask.svg';
import LiqNO from '../../assets/images/Group 33.svg';
import How from '../../assets/images/Group 53.svg';
import AuditBackground from '../../assets/images/AuditsBack.svg';
import Audits from '../../assets/images/Audits.svg';
import reth from '../../assets/images/Screen Shot 2022-06-12 at 22.44.44.png';
import CloudGroup from '../../assets/images/Group 41.svg';
import Bubble1 from '../../assets/images/Group 10.svg';
import Coverage from '../../assets/images/coverage.svg';
//Hook
import useWindowDimensions from '../useWindowDimensions';

const styles = {
  appContent: {
    flex: 1,
    direction: 'flex',
    position: 'relative',
  },
  back: {
    width: "100%",
    position: "absolute",
    top: 110,
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
  //const { height, width } = useWindowDimensions();
  let isMobile = useMediaQuery("(max-width:750px)");
  
  return(
    <div className={styles.appContent}>
      <TopMenu />
      <Box sx={styles.back}>
        <Box
          sx={{
            backgroundColor: "rgb(25,12,77,1)",
            color: "white",
            width: "100%",
            ...(isMobile && {
              width: "10rem",
            }),
          }}
        >
          <Box 
            sx={{
              backgroundColor: "linear-gradient(rgb(25,12,77,1) rgb(23,0,130,1))"
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
              backgroundImage: `url(${cloud})`,
            }}
          >
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "380px",
              flexDirection: "column",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography 
              sx={{
                margin: "1%",
              }}
              color="black"
              variant="h5"
            > 
              Live Statistics 
            </Typography>
            <Typography sx={{marginBottom:"5%", color:'grey.600'}} variant="subtitle1">
              Protocol growth since mainnet launch on November 21st, 2021
            </Typography>
            <Stack direction="row" spacing={"5rem"} justifyContent="space-between">
              <Stack direction="column" alignItems="center">
                <img src={Bubble1} />
                <Typography color= "black" variant="caption" diplay="block" gutterBottom>
                  Total Value Locked
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <img src={Bubble1} />
                <Typography color= "black" variant="caption" diplay="block" gutterBottom>
                  ETH Staked
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <img src={Bubble1} />
                <Typography color= "black" variant="caption" diplay="block" gutterBottom>
                  Validators
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center">
                <img src={Bubble1} />
                <Typography color= "black" variant="caption" diplay="block" gutterBottom>
                  Node Operators
                </Typography>
              </Stack>
            </Stack>  
          </Box>
        </Box>  
        <Box
          sx={{
            height: "1092px",
            backgroundImage: "white",
          }}
        >
          <img style={{objectFit: "contain", width: "100%"}} src={LiqNO} />   
        </Box>
        <Box
          sx={{
            height: "680px",
            backgroundColor: "white",
          }}
        >
          <img style={{objectFit: "contain", position: "relative", top: 0,width: "100%"}} src={How} />   
        </Box>
        <Box
          sx={{
            backgroundColor: "grey",
            width: "100%",
          }}
        >
          <img style={{objectFit: "contain", position: "relative", top: 0,width: "100%"}} src={Coverage} />   
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${AuditBackground})`,
            width: "100%",
          }}
        >
          <img style={{objectFit: "contain", width: "100%"}} src={Audits} />
          <Box
            sx={{
              direction: "flex",
              flexDirection: "column",
            }}
          >

          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  )
}

export default Landing;
