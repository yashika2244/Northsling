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
  BookOpen,     
  Shield,      
  Zap,         
  DollarSign,   
  FileText,     
  BarChart2,    
  Activity,      
    Eye,      
  Sliders,   
  Clock,       
  FileCheck,   
  TrendingUp,  
  Layers 
} from "lucide-react";

import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function CyberInsurance() {
const features = [
  {
    icon: <BookOpen className="w-7 h-7 text-yellow-400" />,
    title: "Zero Ambiguity During Crisis",
    desc: "Everyone knows what to do — and when",
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />,
    title: "Smart Insurance Structuring",
    desc: "Get paid when it matters most",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "Rapid, Forensic-Grade IR",
    desc: "Contain threats within golden hours",
  },
  {
    icon: <DollarSign className="w-7 h-7 text-yellow-400" />,
    title: "Maximum Claims Recovery",
    desc: "Insurer-aligned documentation and advocacy",
  },
  {
    icon: <FileText className="w-7 h-7 text-yellow-400" />,
    title: "Compliance Readiness",
    desc: "Avoid fines with audit-proof response protocols",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
    title: "CXO-Ready Dashboards",
    desc: "Visualize risk in boardroom language",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />,
    title: "Breach Simulation Readiness",
    desc: "Test, refine, and tune playbooks quarterly",
  },
  {
    icon: <Activity className="w-7 h-7 text-yellow-400" />,
    title: "Continuous Improvement",
    desc: "Turn every breach into a resilience multiplier",
  },
];

  
const uiFeatures = [
  {
    icon: <Eye className="w-6 h-6 text-orange-500" />,
    title: "Cyber Asset Intelligence",
    desc: "We map risk across your real-world digital estate.",
  },
  {
    icon: <Sliders className="w-6 h-6 text-orange-500" />,
    title: "Policy Optimization",
    desc: "We identify and plug coverage gaps — before it’s too late.",
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-500" />,
    title: "24/7 IR on Speed Dial",
    desc: "Certified experts on standby globally.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-orange-500" />,
    title: "Forensic Advocacy",
    desc: "Ensure faster, fuller payouts with bulletproof documentation.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: "Post-Breach Growth",
    desc: "From PR to remediation, we help you come back stronger.",
  },
];

  const stats = [
    {
      value: "72-hour",
      label: "system recovery, resuming critical payment operations swiftly",
    },
    {
      value: "15%",
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
        title={
          <>
            You Can’t Predict
            <br />
            Every Breach.
          </>
        }
        subtitle="Cyber Insurance & Incident Response for the Real World"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://citybuildingowners.com/wp-content/uploads/2022/12/Landlord-Cyber-insurance-scaled.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            When Breaches Happen, Recovery Can’t Wait
            <br />
          </>
        }
        description="Even strong defenses get tested. What counts is rapid response and recovery. At Northsling's  Cyber Insurance & Incident Response contain threats, minimize damage, restore operations, and cover financial and legal exposure."
        points={[
          "Immediate incident response to contain breaches and limit impact",
          "Forensic investigation to identify root causes and prevent recurrence",
          "Business continuity planning to restore critical systems fast",
          "Cyber insurance advisory to align coverage with evolving risks",
          "Regulatory reporting & compliance support to reduce penalties and liabilities",
        ]}
        stats={[
          {
            value: "$1.49M",
            description:
              " million savings per breach for companies with formal incident response plans   ",
            source: "IBM",
          },
          {
            value: "$2.22M",
            description:
              "million reduction in breach costs with AI-enabled incident response automation   ",
            source: "IBM",
          },
        ]}
        emphasisText="Cyber Insurance & Incident Response aren’t afterthoughts — they’re your safety net when minutes matter and every decision counts."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400"> Cyber Resilience </span> Must
            Absolutely Get Right
          </>
        }
        description="Today’s businesses demand integrated protection:"
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Respond — We Reinforce Across 5
            Dimensions
          </>
        }
        sectionSubtitle="Northsling transforms enterprise websites across seven performance-critical dimensions to ensure your site becomes an active driver of revenue, reach, and resilience."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Fintech Restores Systems in 72h & Cuts Cyber Premiums 15% with Northsling Ransomware Response"
        description=" Northsling  led a rapid ransomware response and insurance-aligned recovery for a fintech firm.

"
        image="https://intglobal.com/wp-content/uploads/2025/05/Cyber-Insurance-Incident-Response.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Cyber Resilience
Audit — No Strings Attached"
        points={[
          "  Personalized cyber risk heatmap",
          "Insurance gap & exposure report",
          "Executive IR strategy briefing",
          "Tabletop simulation recommendations",
        ]}
        buttonText="Schedule Your Free SOC Assessment"
        buttonAction={() => console.log("Button clicked!")}
      />

      <WhoWeAreSection
        tag="WHO WE ARE"
        title="At Northsling, excellence and innovation drive everything we do"
        description="We go beyond maintaining operations—we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape.."
        stats={statsList}
        awards={awardsList}
        primaryColor="text-blue-600"
      />
      <ContactForm />
    </div>
  );
}

export default CyberInsurance;
