import React from 'react';
import { Link } from "@mui/material";

import { 
  Box,
  IconButton,
  Stack,
  Typography,
//  TextField,
  useMediaQuery,
} from "@mui/material"
//import { createSvgIcon } from "@mui/material/utils";

import mobileLogo from "../../assets/images/mobileLogo.svg";
import Logo from "../../assets/images/RocketPoolLogo V2 - Negative.svg";
import Medium from "../../assets/icons/medium-brands.svg";
import Github from "../../assets/icons/github-brands.svg";
import Discord from "../../assets/icons/discord-brands.svg";
import Twitter from "../../assets/icons/twitter-brands.svg";
import Droplet from "../../assets/icons/droplet-solid.svg";
import NodeOp from "../../assets/icons/user-astronaut-solid.svg";
import Learn from "../../assets/icons/learn-shape.svg";

const styles = {
  banner: {
    backgroundColor: 'rgba(25,12,77,1)',
    height: "100px",
    width: "100%",
    opacity: 1,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundImage: "linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0))",
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0))",
      opacity: 0.7,
      zIndex: -10,
    },
  },
}

const TopMenu = () => {
  let isMedium = useMediaQuery("(max-width:900px)");
  //let isMobile = useMediaQuery("(max-width:750px)");

  return(
    <Box sx={styles.banner}>
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "2rem",
          ...(isMedium && {
            p: "1rem",
          }),
        }}
      >
        <Box>
          <img
            style={{ width: "14vw", marginLeft: "15%", marginRight: "3rem" }}
            src={ isMedium ? mobileLogo : Logo }
            alt="logo"
          />
        </Box>
        <Box>
          <Stack 
            sx={{
              alignItems: "center",
            }} 
            direction="row"
          >
            <img
              src= {Droplet} 
              onClick= {() =>{
                window.open("https://stake.rocketpool.net", "_blank");
              }} 
            /> 
            <Typography 
              sx={{marginRight: "1rem", marginLeft: "0.5rem"}} 
              variant="caption"
              color= "white"
              onClick= {() =>{
                window.open("https://stake.rocketpool.net", "_blank");
              }} 
            > 
              Staking 
            </Typography>
            <img 
              src= {NodeOp} 
              onClick= {() =>{
                window.open("https://rocketpool.net/node-operators", "_blank");
              }} 
            /> 
            <Typography 
              sx={{marginRight: "1rem", marginLeft: "0.5rem"}} 
              color= "white"
              variant="caption"
              onClick= {() =>{
                window.open("https://rocketpool.net/node-operators", "_blank");
              }} 
            > 
              Node Operator 
            </Typography>
            <img 
              src= {Learn} 
              onClick= {() =>{
                window.open("https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd", "_blank");
              }} 
            /> 

            <Typography 
              sx={{marginRight: "1rem", marginLeft: "0.5rem"}} 
              color= "white"
              variant= "caption"
              onClick= {() =>{
                window.open("https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd", "_blank");
              }} 
            > 
              Learn 
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "right",
            p: "2rem",
            ...(isMedium && {
              p: "1rem",
            }),
          }}
        >
          <Stack direction="row">
            <IconButton 
              onClick={() => {
                window.open("https://medium.com/rocket-pool", "_blank");
              }}
            >
              <img
                src={ Medium } 
                alt="Medium"
              />
            </IconButton>
            <IconButton
              onClick={() => {
                
                window.open("https://discord.gg/5QxWCHYg", "_blank");
              }}
            >
              <img
                src={ Discord } 
                alt="Discord" 
              />
            </IconButton>
            <IconButton 
              onClick={() => {
                window.open("https://twitter.com/rocket_pool", "_blank");
              }}
            >
              <img
                src={ Twitter } 
                alt="Twitter" 
              />
            </IconButton>
            <IconButton 
              onClick={() => {
                window.open("https://github.com/rocket-pool", "_blank");
              }}
            >
              <img
                src={ Github } 
                alt="Github" 
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default TopMenu;
