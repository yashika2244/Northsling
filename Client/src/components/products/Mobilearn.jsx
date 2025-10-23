import React from "react";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import ContactForm from "../../pages/success/ContactForm";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import WhoWeAre from "../Ui.jsx/WhoWeAre";
import {
  Globe,
  Package,
  Activity,
  Cpu,
  MessageSquare,
  MapPin,
  Camera,
  BarChart,
  Figma,
  Accessibility,
  User, Shield, Zap, BookOpen, Users, Speaker


} from "lucide-react";

import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import FeatureSlider from "./FeatureSlider";
import UniqueSection from "./UniqueSection";
import BeyondLMS from "./BeyondLMS";
import IndustriesSection from "./IndustriesSection";
function Mobilearn() {
  const uiFeatures = [
  {
    icon: <User className="w-6 h-6 text-orange-500" />,
    title: "Sales Training",
    desc: "Micro modules + assessments = faster conversions",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Safety & Compliance",
    desc: "Tracked completions + audit-friendly evidence",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: "Onboarding",
    desc: "Reduce ramp-up time from weeks to days",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: "Policy Training",
    desc: "Ensure access and understanding of internal protocols.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Partner/Vendor Training",
    desc: "Enable consistency across distributed touchpoints",
  },
  {
    icon: <Speaker className="w-6 h-6 text-orange-500" />,
    title: "Consumer Education",
    desc: "Deliver instructional content at scale",
  },
];
  const features = [
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />,
      title: "Mobile-First UX",
      desc: "Android-native experience with offline access and sync",
    },
    {
      icon: <Package className="w-7 h-7 text-yellow-400" />,
      title: "Microlearning at Scale",
      desc: "Streamable video modules built for bandwidth-light regions",
    },
    {
      icon: <Activity className="w-7 h-7 text-yellow-400" />,
      title: "Real-Time Analytics",
      desc: "Track completions, drop-offs, and user behaviors",
    },
    {
      icon: <Cpu className="w-7 h-7 text-yellow-400" />, // <--- here
      title: "Gamification & Certification",
      desc: "Leaderboards, badges, and achievement incentives",
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-yellow-400" />,
      title: "Adaptive Learning Paths",
      desc: "Personalized content based on performance",
    },
    {
      icon: <MapPin className="w-7 h-7 text-yellow-400" />,
      title: "Compliance Locks",
      desc: "Skip detection and min-watch thresholds for audit integrity",
    },
    {
      icon: <Camera className="w-7 h-7 text-yellow-400" />,
      title: "Multilingual Delivery",
      desc: "Serve diverse teams with local language content",
    },
    {
      icon: <BarChart className="w-7 h-7 text-yellow-400" />,
      title: "API-First Architecture",
      desc: "Plug into LMS, HRMS, or backend stacks seamlessly",
    },
  ];

  const stats = [
    {
      value: "8",
      label: "system recovery, resuming critical payment operations swiftly",
    },
    {
      value: "40%",
      label: "projected drop in cyber premiums, driven by improved controls",
    },
  ];
  const awardsList = [
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-2.png",
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
    "https://intglobal.com/wp-content/uploads/2025/02/500-1-1.png",
    "https://intglobal.com/wp-content/uploads/2025/02/fast50-1.png",
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
  ];

  const statsList = [
    { value: "27+", label: "Years of Excellence" },
    { value: "10", label: "Offices Worldwide" },
    { value: "1,100+", label: "Solution Experts" },
    { value: "500+", label: "Worldwide Happy Clients" },
  ];

  return (
    <div className="">
      <HeroSection
        logo="https://intglobal.com/wp-content/uploads/2025/05/Mobilearn_logo-1.png"
        title={<>Mobilearn — Gamified Microlearning for the Modern Workforce</>}
        subtitle="Because Learning Isn’t Just Training Anymore — It’s Performance Fuel"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://images.pexels.com/photos/583848/pexels-photo-583848.jpeg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            Learning That Sticks. Growth That Scales
            <br />
          </>
        }
        description="Traditional training is slow, costly, and quickly forgotten. Mobilearn changes that. Built by Northsling’s Mobilearn is a gamified microlearning platform designed to engage employees, accelerate learning, and improve retention — all through bite-sized, interactive modules that fit into busy workdays."
        points={[
          "Gamified learning modules that boost participation and motivation",
          "Microlearning design for faster retention and real-world application",
          "Mobile-first platform accessible anytime, anywhere, on any device",
          "Customizable content paths aligned to organizational goals",
          "Analytics & reporting to track progress and measure impact",
        ]}
        stats={[
          {
            value: "51%",
            description:
              " higher retention achieved with mobile learning vs traditional training methods  ",
            source: "elearningindustry",
          },
          {
            value: "40%",
            description:
              "faster completion rates with gamified training compared to traditional learning formats  ",
            source: "amplifai",
          },
        ]}
        emphasisText="Mobilearn isn’t another training tool — it’s how modern businesses turn learning into a competitive advantage."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={<>What Smart Learning Platforms Must Enable</>}
        description="Modern enterprises expect:"
        features={features}
      />

      <div className="font-sans bg-gray-50">
        <UniqueSection />
        <BeyondLMS />
      </div>
      <FeatureSlider />
     <NorthslingUIDesigns
        sectionTitle={
          <>
           Use Cases Solved. Results Delivered.
          </>
        }
        sectionSubtitle="Northsling transforms enterprise websites across seven performance-critical dimensions to ensure your site becomes an active driver of revenue, reach, and resilience."
        features={uiFeatures}
      />
      <IndustriesSection/>
      <ContactForm />
    </div>
  );
}

export default Mobilearn;
