import React from 'react';
import { Link } from "@mui/material";
import Logo from "../../assets/images/RocketPoolLogo V2 - Positive.svg";
import {
  Box,
  Typography,
  Stack,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{backgroundColor: ' rgba(255,255,255,1)'}}>
      <Stack direction="row" justifyContent="space-evenly">        
        <Link
          to={"/"}
          aria-label="company"
          title="Rocket Pool Pty Ltd."
          className="inline-flex items-center"
        >
          <img src={Logo} alt="Rocket Pool" />
        </Link>
    
        <Stack direction= "column" spacing={1}>
          <Typography variant= "h6">Staking</Typography>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            Overview
          </Link>
          <Link
            onClick={ () => {
              window.open('https://stake.rocketpool.net/', '_blank');
            }}
          >
            {'Rocket Pool Staking'}
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            ETH2 Staking
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            rETH Token
          </Link>
        </Stack>

        <Stack direction="column" spacing={1}>
          <Typography variant= "h6">Node Operator</Typography>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            How it works
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            Install Rocket Pool
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            Cloud Nodes
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            Local Nodes
          </Link>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant= "h6">Learn</Typography>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            Introduction
          </Link>
          <Link
            to={"/"}
            aria-label=""
            title="Intro"
            className=""
          >
            Explainer Series
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
            Developers
          </Link>
          <Link
            to={""}
            aria-label=""
            title=""
            className=""
          >
           Guides 
          </Link>
        </Stack>
      </Stack>
    </Box>  
  )
}

export default Footer;
