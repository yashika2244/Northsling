import React from "react";
import CompanySection from "./company/CompanySection";
import EpamAtGlance from "./company/EpamAtGlance";
import HeroSection from "./company/HeroSection";
import Locations from "../components/Locations";
import LeadershipTeam from "./company/LeadershipTeam";

function Company() {
  return (
    <div>
      <CompanySection />
      <HeroSection />
      <LeadershipTeam/>
      <EpamAtGlance />
      <Locations/>
    </div>
  );
}

export default Company;
