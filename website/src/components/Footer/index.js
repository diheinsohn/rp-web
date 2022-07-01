import React from 'react';
import {
  Box,
  Container,
  Link,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import styled from "styled-components";
import Logo from "../../assets/images/RocketPoolLogo V2 - Positive.svg";


const FooterContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  justify-content: center;
  margin-top: 100px;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 100%;
`;
const LogoImg = styled.img`
  max-width: 200px;
`;
const NavStack = styled(Stack)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
const NavItem = styled(Link)`
  display: flex;
`;

const Footer = () => {
  return (
    <FooterContent>
      <Container>
        <Nav>
          <Grid container width={"100%"} spacing={12} >
            <Grid item xs={3}>
              <Link href="/">
                <LogoImg src={Logo} />
              </Link>
              <Typography variant= "subtitle2" color="text.disabled"> Decentralised Ethereum </Typography>
              <Typography variant= "subtitle2" color="text.disabled"> Staking Protocol </Typography>
              <Typography variant= "subtitle2" color="text.disabled"> Rocket Pool Pty Ltd. </Typography>
            </Grid>
            <Grid item xs={9}>
              <NavStack
                direction="row"
              >
                <NavStack
                  direction="column"
                >
                  <Typography variant= "h6">Staking</Typography>
                  <Link 
                    style= {{ color: 'grey', textDecoration: 'none' }}
                    onClick = { () => {
                      window.open('https://docs.rocketpool.net/guides/staking/overview.html', '_blank');
                    }}
                  >
                    <Typography variant= "subtitle2" color="text.disabled"> Overview </Typography> 
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
                </NavStack>
                <NavStack
                  direction="column"
                >
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
                </NavStack>
                <NavStack
                  direction="column"
                >
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
                </NavStack>
                <NavStack
                  direction="column"
                >
                  <Typography sx={{marginBottom: "4%"}} variant="h6"> Legal </Typography>
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
                </NavStack>
              </NavStack>
            </Grid>
          </Grid>
        </Nav>
      </Container>
  </FooterContent>
  )
}

export default Footer;
