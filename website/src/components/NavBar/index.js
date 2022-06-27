import React from "react";
import { Box, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Logo from "../../assets/images/RocketPoolLogo V2 - Negative.svg";

const Nav = styled.nav`
  padding: 20px;
`;
const LogoImg = styled.img`
  max-width: 200px;
  display: flex;
`;
const NavStack = styled(Stack)`
  height: 100%;
`;
const NavItem = styled(Link)`
  display: flex;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const NavBar = () => {
  return (
    <Nav>
      <Grid container>
        <Grid item xs={4}>
          <Link href="/">
            <LogoImg src={Logo} />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <NavStack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <NavItem href="https://stake.rocketpool.net">
              <Icon icon={solid("droplet")} inverse />
              <Typography color="white">Staking</Typography>
            </NavItem>
            <NavItem href="https://rocketpool.net/node-operators">
              <Icon icon={solid("user-astronaut")} inverse />
              <Typography color="white">Node Operator</Typography>
            </NavItem>
            <NavItem href="https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd">
              <Icon icon={solid("solar-system")} inverse />
              <Typography color="white">Learn</Typography>
            </NavItem>
          </NavStack>
        </Grid>
        <Grid item xs={4}>
          <NavStack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
          >
            <IconButton href="https://medium.com/rocket-pool">
              <FontAwesomeIcon icon={brands("medium")} inverse />
            </IconButton>
            <IconButton href="https://discord.gg/5QxWCHYg">
              <FontAwesomeIcon icon={brands("discord")} inverse />
            </IconButton>
            <IconButton href="https://twitter.com/rocket_pool">
              <FontAwesomeIcon icon={brands("twitter")} inverse />
            </IconButton>
            <IconButton href="https://github.com/rocket-pool">
              <FontAwesomeIcon icon={brands("github")} inverse />
            </IconButton>
          </NavStack>
        </Grid>
      </Grid>
    </Nav>
  );
};

export default NavBar;
