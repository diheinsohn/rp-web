import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/images/RocketPoolLogo V2 - Negative.svg";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col border-t border-slate-400/5 drop-shadow-2x1 p-4 bg-mainBg">
      <div className="w-full flex sm:flex-row animate-fade-in-down flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <Link
            to={"/"}
            aria-label="company"
            title="Rocket Pool Pty Ltd."
            className="inline-flex items-center"
          >
            <img src={Logo} alt="Rocket Pool" />
            
          </Link>
        </div>
        <div className="flex flex-1 justify-evenly items-center antialiased text-slate-300 font-medium md:text-2x1 lg:text-2x1 uppercase flex-wrap sm:mt-0 mt-5 w-full">
          <div className="flex">
            Staking 
            <Link
              to={""}
              aria-label=""
              title=""
              className=""
            >
              Overview
            </Link>
            <Link
              to={"https://stake.rocketpool.net"}
              aria-label=""
              title="Stake"
              className=""
            >
              Rocket Pool Staking
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
          </div>

          <div className="flex">
            Node Operator
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
