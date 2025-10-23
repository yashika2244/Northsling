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


function Origin() {
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
      title: "Multi-Channel Engagement",
      desc: "Help brokers close more deals via WhatsApp, email, and calls — all tracked inside Origin.",
    },
    {
      icon: <Package className="w-7 h-7 text-yellow-400" />,
      title: "Digital Workflows from Quote to Claim",
      desc: "For MGAs and insurers who want automation, compliance, and speed — in one flow.",
    },
    {
      icon: <Activity className="w-7 h-7 text-yellow-400" />,
      title: "Dynamic Policy & Commission Setup",
      desc: "Configure clauses, riders, and broker commissions — fast, flexible, and code-free.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-yellow-400" />, // <--- here
      title: "Broker Access Linked to Business Terms",
      desc: "Auto-sync broker permissions with ToB contracts for full compliance visibility.",
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-yellow-400" />,
      title: "Lloyd’s of London Ready",
      desc: "Place risks globally — Origin connects MGAs directly with Lloyd’s syndicates.",
    },
    {
      icon: <MapPin className="w-7 h-7 text-yellow-400" />,
      title: "Built-In Regulatory Controls",
      desc: "Insurers can manage taxes, licenses, and surplus lines across regions with ease.",
    },
    {
      icon: <Camera className="w-7 h-7 text-yellow-400" />,
      title: "Real-Time Intelligence",
      desc: "Track claims ratios, commissions, and profitability across your entire distribution network.",
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
        logo="/logoImge.png"
        title={<>Northsling Origin Insurance — Built for
Insurers, MGAs, and Brokers</>}
        subtitle="Because Learning Isn’t Just Training Anymore — It’s Performance Fuel"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://images.pexels.com/photos/7674917/pexels-photo-7674917.jpeg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
          Insurance That Starts Smart and Stays Simple
            <br />
          </>
        }
        description="Insurance is complex, but selling and managing it shouldn’t be. Northsling’s Origin Insurance simplifies distribution, speeds policy issuance, and elevates customer engagement—helping insurers, brokers, and MGAs launch faster, manage smarter, and deliver modern experiences."
        points={[
"   Digital policy issuance that cuts processing time from days to minutes",
'Seamless distribution management for agents, brokers, and partners',
"Customer-first portals for self-service, claims, and engagement",
'Configurable product engine to launch and scale new offerings quickly',
'Compliance-ready framework that ensures security and trust',
        ]}
        stats={[
          {
            value: "70%",
            description:
              " reduction in claims processing time achieved by AI-powered automation, saving insurers $6.5 billion annually ",
            source: "coinlaw",
          },
          {
            value: "50%",
            description:
              "reduction in operational costs due to automation of claims and policy workflows  ",
            source: "feathery",
          },
        ]}
        emphasisText="Origin Insurance isn’t just software — it’s the digital backbone for insurers who want to stay competitive in a customer-first world."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={<>Built for <span className="text-yellow-300"> Insurers, MGAs <span className="text-white"> & </span>Brokers</span> 
Not Just Policy Admin</>}
        description="Northsling Origin Insurance is purpose-built to streamline, scale, and smarten every part of the insurance value chain:

"
        features={features}
      />

      <div className="font-sans bg-gray-50">
      
      </div>
   
     
         <WhoWeAreSection
                                      tag="WHO WE ARE"
                                      title="We strive for excellence and innovation in our work and we deliver it!"
                                      description="Maintaining consistent operations is just the beginning in today’s ever-evolving IT environment. Northsling provides the data, insights, trends, and established practices that organizations need to remain competitive."
                                      stats={statsList}
                                      awards={awardsList}
                                      primaryColor="text-blue-600"
                                    />
      <ContactForm />
    </div>
  );
}

export default Origin;
