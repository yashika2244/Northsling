// Home.jsx
import React from "react";
import PageSlider from "../components/PageSlider/PageSlider";
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <PageSlider />
      <DigitalLensSection />
      <ServicesSection/>
      <CaseStudyCard />
     
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
