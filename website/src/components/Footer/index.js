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

      <Stack sx={{ width: "75%", height: "75%" }} direction="row" justifyContent="space-evenly">        
        <Stack sx={{marginTop: "1%", marginRight:"7%" }} direction="column" >
          <Link
            aria-label="company"
            title="Rocket Pool Pty Ltd."
            className="inline-flex items-center"
          >
            <img src={Logo} alt="Rocket Pool" />
          </Link>
          <Typography sx={{ marginTop: "10%" }} variant= "subtitle2" color="text.disabled"> Decentralised Ethereum </Typography>
          <Typography sx={{ marginBottom: "10%" }} variant= "subtitle2" color="text.disabled"> Staking Protocol </Typography>
          <Typography variant= "subtitle2" color="text.disabled"> Rocket Pool Pty Ltd. </Typography>
        </Stack>
        <Stack sx={{ marginRight:"7%" }} direction= "column" justifyContent="space-evenly">
          <Typography sx={{marginBottom: "4%"}}variant= "h6">Staking</Typography>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Overview </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html#how-eth2-staking-works', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Rocket Pool Staking </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html#how-rocket-pool-works', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> ETH2 Staking </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/staking/overview.html#the-reth-token', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> rETH Token </Typography>
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
            <Typography variant="subtitle2" color="text.disabled"> How it works </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/local/hardware.html', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Local Nodes </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/vps/providers.html', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Cloud Nodes </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/node/eth-clients.html', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Install Rocket Pool </Typography>
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
            <Typography variant="subtitle2" color="text.disabled"> Introduction </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick= {() =>{
              window.open("https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd", "_blank");
             }} 
          >
            <Typography variant="subtitle2" color="text.disabled"> Explainer Series </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/guides/', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Guides </Typography>
          </Link>
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://docs.rocketpool.net/developers/', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Developers </Typography>
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
            <Typography variant="subtitle2" color="text.disabled"> Privacy Policy </Typography>
          </Link>        
          <Link
            style= {{ color: 'grey', textDecoration: 'none' }}
            onClick={ () => {
              window.open('https://rocketpool.net/files/terms-of-service.pdf', '_blank');
            }}
          >
            <Typography variant="subtitle2" color="text.disabled"> Terms of Service </Typography>
          </Link>        
        </Stack>
      </Stack>
    </Box>  
  )
}

export default Footer;
