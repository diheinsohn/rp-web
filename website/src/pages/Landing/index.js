import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import clouds from "../../assets/images/whitecloud.svg";
import rockets from "../../assets/images/rockets.svg";

const LandingContainer = styled(Container)`
  height: 1500px;
  background: linear-gradient(rgb(255, 255, 255));
`;
const BannerContainer = styled(Container)`
  height: 700px;
  background: linear-gradient(rgb(25, 12, 77) 0%, rgb(23, 0, 130) 100%);
  > div {
    height: 100%;
  }
`;
const BannerContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 130px;
`;
const BannerTypography = styled(Typography)`
  color: white;;
  && {
    font-weight: 500;
  }
`;
const SecondaryButton = styled(Button)`
  && {
    border-radius: 20px;
    color: white;
    padding: 5px 30px;
    text-transform: none;
    margin-top: 40px;
  }
`;

const Clouds = styled(Box)`
  width: 100%;
  background: url(${clouds}) center center repeat-x;
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translate(-50%);
`;

const Landing = (props) => {
  let isMobile = useMediaQuery("(max-width:750px)");

  return (
    <>
      <CssBaseline />
      <LandingContainer maxWidth={true} disableGutters>
        <BannerContainer maxWidth={false}>
          <Container>
            <NavBar />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <BannerContent>
                  <BannerTypography variant="h4" gutterBottom>
                    The first truly decentralised Ethereum staking pool.
                  </BannerTypography>
                  <SecondaryButton variant="contained" color="secondary" href="#">
                    Stake Now
                  </SecondaryButton>
                </BannerContent>
              </Grid>
              <Grid item xs={6}>
                <img src={rockets} />
              </Grid>
            </Grid>
          </Container>
          <Clouds />
        </BannerContainer>
        <Footer />
      </LandingContainer>
      {/* <Container
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
        <Typography
          sx={{ marginBottom: "5%", color: "grey.600" }}
          variant="subtitle1"
        >
          Protocol growth since mainnet launch on November 21st, 2021
        </Typography>
        <Stack direction="row" spacing={"5rem"} justifyContent="space-between">
          <Stack direction="column" alignItems="center">
            <img src={Bubble1} />
            <Typography
              color="black"
              variant="caption"
              diplay="block"
              gutterBottom
            >
              Total Value Locked
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center">
            <img src={Bubble1} />
            <Typography
              color="black"
              variant="caption"
              diplay="block"
              gutterBottom
            >
              ETH Staked
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center">
            <img src={Bubble1} />
            <Typography
              color="black"
              variant="caption"
              diplay="block"
              gutterBottom
            >
              Validators
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center">
            <img src={Bubble1} />
            <Typography
              color="black"
              variant="caption"
              diplay="block"
              gutterBottom
            >
              Node Operators
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Container
        sx={{
          height: "1092px",
          backgroundImage: "white",
        }}
      >
        <img style={{ objectFit: "contain", width: "100%" }} src={LiqNO} />
      </Container>
      <Container
        sx={{
          height: "680px",
          backgroundColor: "white",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            position: "relative",
            top: 0,
            width: "100%",
          }}
          src={How}
        />
      </Container>
      <Container
        sx={{
          backgroundColor: "grey",
          width: "100%",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            position: "relative",
            top: 0,
            width: "100%",
          }}
          src={Coverage}
        />
      </Container>

      <Container
        sx={{
          backgroundImage: `url(${AuditBackground})`,
          width: "100%",
        }}
      >
        <img style={{ objectFit: "contain", width: "100%" }} src={Audits} />
        <Box
          sx={{
            direction: "flex",
            flexDirection: "column",
          }}
        ></Box>
      </Container>
      <Footer /> */}
    </>
  );
};

export default Landing;
