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
    <Box 
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        width: "100%",
        backgroundColor: ' rgba(255,255,255,1)',
      }}
    >

      <Stack sx={{ width: "75%", height: "75%" }}direction="row" justifyContent="space-evenly">        
        <Stack sx={{marginTop: "1%", marginRight:"7%" }} direction="column" >
          <Link
            aria-label="company"
            title="Rocket Pool Pty Ltd."
            className="inline-flex items-center"
          >
            <img src={Logo} alt="Rocket Pool" />
          </Link>
          <Typography sx={{ marginTop: "10%" }} variant= "subtitle" color="text.disabled"> Decentralised Ethereum </Typography>
          <Typography sx={{ marginBottom: "10%" }} variant= "subtitle" color="text.disabled"> Staking Protocol </Typography>
          <Typography variant= "subtitle" color="text.disabled"> Rocket Pool Pty Ltd. </Typography>
        </Stack>
        <Stack sx={{ marginRight:"7%" }} direction= "column" justifyContent="space-evenly">
          <Typography sx={{marginBottom: "4%"}}variant= "h6">Staking</Typography>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html', '_blank');
            }}
          >
            Overview
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html#how-eth2-staking-works', '_blank');
            }}
          >
            {'Rocket Pool Staking'}
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html#how-rocket-pool-works', '_blank');
            }}
          >
            ETH2 Staking
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html#the-reth-token', '_blank');
            }}
          >
            rETH Token
          </Link>
        </Stack>

        <Stack sx={{ marginRight: "7%" }} direction="column" justifyContent="space-evenly">
          <Typography sx={{marginBottom: "4%"}} variant= "h6">Node Operator</Typography>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/responsibilities.html#how-rocket-pool-nodes-work', '_blank');
            }}
          >
            How it works
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/local/hardware.html', '_blank');
            }}
          >
            Local Nodes
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/vps/providers.html', '_blank');
            }}
          >
            Cloud Nodes
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/eth-clients.html', '_blank');
            }}
          >
            Install Rocket Pool
          </Link>
        </Stack>
        <Stack sx={{ marginRight:"7%" }} direction="column" justifyContent="space-evenly">
          <Typography sx={{marginBottom: "4%"}} variant= "h6">Learn</Typography>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/overview/', '_blank');
            }}
          >
            Introduction
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick= {() =>{
              window.open("https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd", "_blank");
             }} 
          >
            Explainer Series
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/', '_blank');
            }}
          >
            Guides
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/developers/', '_blank');
            }}
          >
           Developers
          </Link>
        </Stack>
        <Stack direction="column" spacing={3}>
          <Typography sx={{marginTop: "6%", marginBottom: "4%"}} variant="h6"> Legal </Typography>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://rocketpool.net/files/privacy-policy.pdf', '_blank');
            }}
          >
            Privacy Policy
          </Link>        
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://rocketpool.net/files/terms-of-service.pdf', '_blank');
            }}
          >
            Terms of Service
          </Link>        
        </Stack>
      </Stack>
    </Box>  
  )
}

export default Footer;
