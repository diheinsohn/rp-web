import React from 'react';
import { Link } from "@mui/material";

import { 
  Box,
//  IconButton,
  Stack,
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

const styles = {
  banner: {
    backgroundColor: 'rgba(25,12,77,1)',
    height: "100hv",
    width: "100%",
    opacity: 1,
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(rgb(0,0,0,0.8), rgb(0,0,0,0.1))",
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

    
        </Box>
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
          <Stack direction="row" spacing={1}>
            <Link href="https://medium.com/rocket-pool/" target="_blank" rel="noreferrer">
              <img
                style={{ marginRight: "1rem" }}
                src={ Medium } 
                alt="Medium" 
              />
            </Link>
            <Link to="" target="_blank">
              <img
                style={{ marginRight: "1rem" }}
                src={ Discord } 
                alt="Discord" 
              />
            </Link>
            <Link to="https://twitter.com/rocket_pool" target="_blank">
              <img
                style={{ marginRight: "1rem" }}
                src={ Twitter } 
                alt="Twitter" 
              />
            </Link>
            <Link to="https://github.com/rocket-pool/" target="_blank">
              <img
                style={{ marginRight: "1rem" }}
                src={ Github } 
                alt="Github" 
              />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default TopMenu;
