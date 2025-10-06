// Home.jsx
import React from "react";
import DigitalLensSection from "../components/DigitalLensSection";
import CaseStudyCard from "../components/CaseStudyCard";
import Slider from "../components/PageSlider2";
import PartnersSection from "../components/PartnersSection";
import FeaturedStoryCard from "../components/FeaturedStoryCard";
import StoryGrid from "../components/StoryGrid";
import Services from "../components/Services";
import Locations from "../components/Locations";
import JoinTeam from "../components/JoinTeam";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Hero1 from "../components/Hero1";
import ClientsSection from "../components/ClientsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero1/>
      <DigitalLensSection />
      <ServicesSection/>
      <ClientsSection/>
      {/* <CaseStudyCard /> */}
     
      <PartnersSection/>
       <Slider />
      <FeaturedStoryCard/>
      <StoryGrid/>
      <Services/>
      <Locations/>
      <JoinTeam/>
    </div>
  );
}
