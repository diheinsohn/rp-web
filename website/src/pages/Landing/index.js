import React from "react";
import {
  Box,
  Button,
  Stack,
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
import bubble1 from "../../assets/images/bubble1.svg";
import bubble2 from "../../assets/images/bubble2.svg";
import bubble3 from "../../assets/images/bubble3.svg";
import bubble4 from "../../assets/images/bubble4.svg";
import oval from "../../assets/images/Oval + Oval Copy Mask.svg";
import LiqNO from "../../assets/images/Group 2.svg";
import How from "../../assets/images/Group 53.svg";
import Audits from "../../assets/images/Audits.svg";
import Coverage from "../../assets/images/coverage.svg";
import Community from "../../assets/images/community.svg";
import footerClouds from "../../assets/images/footer-clouds.svg";

const LandingContainer = styled(Container)`
  height: 2200px;
`;
const BannerContainer = styled(Container)`
  height: 800px;
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
  max-height: 300px;
  background: url(${clouds}) center center repeat-x;
  position: absolute;
  left: 50%;
  top: 650px;
  transform: translate(-50%);
`;
const LightClouds = styled(Box)`
  width: 100%;
  max-height: 300px;
  background: url(${clouds}) center center repeat-x;
  background-size: 150%;
  position: absolute;
  left: 50%;
  top: 580px;
  transform: translate(-50%);
  opacity: 0.5;
`;
const Lighit2Clouds = styled(Box)`
  width: 100%;
  max-height: 300px;
  background: url(${clouds}) center center repeat-x;
  background-size: 150%;
  position: absolute;
  left: 50%;
  top: 520px;
  transform: translate(-50%);
  opacity: 0.3;
`;
const StatisticsContainer = styled(Container)`
  height: 400px;
  > div {
    height: 100%;
  }
`;
const StatisticsContent = styled(Stack)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
`;
const StatisticsValues = styled(Stack)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const EngagementContainer = styled(Container)`
  position: relative;
  background-image: url(${oval}) fixed;
  > div {
    height: 100%;
  }
`;
const InfoContainer = styled(Box)`
  marginTop: 50px:
  marginBottom: 50px;
`;
const CoverageContainer = styled(Box)`
  object-fit: contain;
  background: rgb(242, 242, 242);
`;
const AuditsContainer = styled(Box)`
  object-fit: contain;
  background: rgb(242, 242, 242);
`;
const CommunityContainer = styled(Box)`
  object-fit: contain;

`;
const FooterContainer = styled(Container)`
  height: 600px;
`;
const FooterClouds = styled(Box)`
  height: 180px;
  background: url(${footerClouds}) center center repeat-x;
  background-position: 50% 45%;
  position: relative;
  top: -100px;
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
                <img style={{position:"absolute", top: "162px", left: "49%"}} src={rockets} />
              </Grid>
            </Grid>
          </Container>
          <Lighit2Clouds />
          <LightClouds />
          <Clouds />
        </BannerContainer>
        <StatisticsContainer>
          <Container>
              <StatisticsContent>
                <Typography sx={{margin: "1%"}} color="black" variant="h5"> Live Statistics </Typography>
                <Typography sx={{ marginBottom: "5%", color: "grey.600" }} variant="subtitle1">
                  Protocol growth since mainnet launch on November 21st, 2021
                </Typography>
                <StatisticsValues direction="row" spacing="7rem">
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <img style={{paddingLeft: "1rem" }} src={bubble1} />
                    <Typography color="black" variant="caption" diplay="block" gutterBottom> Total Value Locked </Typography>
                  </Stack>
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <img style={{paddingLeft: "1rem" }} src={bubble2} />
                    <Typography color="black" variant="caption" diplay="block" gutterBottom> ETH Staked </Typography>
                  </Stack>
                  <Stack direction="column" alignItems="center" justifyContent="center" >
                    <img style={{paddingLeft: "1rem" }} src={bubble3} />
                    <Typography color="black" variant="caption" diplay="block" gutterBottom> Validators </Typography>
                  </Stack>
                  <Stack direction="column" alignItems="center" justifyContent="center" >
                    <img style={{paddingLeft: "1rem" }} src={bubble4} />
                    <Typography color="black" variant="caption" diplay="block" gutterBottom> Node Operators </Typography>
                  </Stack>
                </StatisticsValues>
              </StatisticsContent>
          </Container>
        </StatisticsContainer>
        <EngagementContainer >
          <img style={{ objectFit: "contain", maxHeight: "950px", width: "100%" }} src={LiqNO} />
        </EngagementContainer>
        <InfoContainer style={{width: "100%"}}>
          <img style={{ marginTop: "50px", marginBottom: "50px", objectFit: "contain", width: "100%" }} src={How}/>
        </InfoContainer>
        <CoverageContainer>
          <img style={{ width: "100%" }} src={Coverage}/>
        </CoverageContainer>
        <AuditsContainer>
          <img style={{ objectFit: "contain", width: "100%" }} src={Audits} />
        </AuditsContainer>
        <CommunityContainer>
          <img style= {{ width: "100%" }} src={Community} />
        </CommunityContainer>
        <FooterClouds />
        <Footer />
      </LandingContainer>
    </>
  );
};

export default Landing;
