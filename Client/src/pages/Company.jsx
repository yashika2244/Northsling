import React from "react";
import CompanySection from "./company/CompanySection";
import EpamAtGlance from "./company/EpamAtGlance";
import HeroSection from "./company/HeroSection";
import Locations from "../components/Locations";
import LeadershipTeam from "./company/LeadershipTeam";
import TeamSection from "./company/TeamSection";
import CompanyPanel from "./company/CompanyPanel";

function Company() {
  return (
    <div>
      {/* <TeamSection/>
      <CompanySection />
      <HeroSection />
      <LeadershipTeam/>
      <EpamAtGlance />
      <Locations/> */}
      <CompanyPanel/>
    </div>
  );
}

export default Company;
