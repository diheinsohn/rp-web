import React from 'react';

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Landing = () => {
  let isMobile =useMediaQuery("(max-width:750px)");

  return(
    <Box display="flex" justifyContent="center">
      <Box
        sx={{
          backgroundColor: "rgba(25,12,77,1)",
          color: "white",
          mt: "35vh",
          m1: "10vw",
          width: "20rem",
          ...(isMobile && {
            width: "10rem",
            mt: "65vh",
            m1: "2rem",
          }),
        }}
      >
        <Typography variant={isMobile ? "h6" : "h4"}>
          The first truly decentralised Ethereum staking pool.
        </Typography>
        <Button variant="contained" color="orange">
          Stake Now
        </Button>  
      </Box>  
    </Box>
  )
}

export default Landing;
