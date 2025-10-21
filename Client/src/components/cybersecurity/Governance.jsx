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
  Eye,         
  Search,     
  AlertCircle,  
  Zap,           
  BarChart2,    
  FileCheck,     
  Layers,      
  Activity,  
  Globe,      
  Cpu,       
  Repeat,     
  UserCheck,
} from "lucide-react";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function Governance() {
  const features = [
  {
    icon: <Eye className="w-7 h-7 text-yellow-400" />,
    title: "24/7 Threat Monitoring",
    desc: "Always-on defense across endpoints, cloud, and apps",
  },
  {
    icon: <Search className="w-7 h-7 text-yellow-400" />,
    title: "Threat Hunting",
    desc: "Seek out and shut down hidden adversaries early",
  },
  {
    icon: <AlertCircle className="w-7 h-7 text-yellow-400" />,
    title: "Contextual Alerting",
    desc: "Prioritize what matters with enriched threat signals",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "Incident Response",
    desc: "Respond fast with SLA-bound playbooks and automation",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
    title: "Business-Aligned Dashboards",
    desc: "Translate technical data into executive clarity",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />,
    title: "Compliance Enablement",
    desc: "Automate evidence collection for audits",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />,
    title: "Adaptive Playbooks",
    desc: "Tactics that shift with threat evolution",
  },
  {
    icon: <Activity className="w-7 h-7 text-yellow-400" />,
    title: "Risk Modeling",
    desc: "Predict future threats and quantify potential business impact",
  },
];


 const uiFeatures = [
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    title: "Global 24/7 Managed SOC",
    desc: "Real-world experience, not just certifications, at every analyst tier.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-orange-500" />,
    title: "AI-Infused Threat Intelligence",
    desc: "Continuously updated risk signals from global telemetry.",
  },
  {
    icon: <Repeat className="w-6 h-6 text-orange-500" />,
    title: "Dynamic Playbooks",
    desc: "Response workflows that adapt to asset criticality and threat type.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-orange-500" />,
    title: "CXO-Focused Impact Mapping",
    desc: "Every alert ties to a business KPI—downtime avoided, trust preserved.",
  },
];


  const stats = [
    {
      value: "93%",
      label: "alert triage automated, cutting low-priority noise.",
    },
    {
      value: "1.8-hour MTTR",
      label: "achieved, down from 12 hours, accelerating threat response",
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
            Stop Threats Before They Start—
            <br />
            And Outpace Them Forever
          </>
        }
        subtitle="Stop Reacting to Threats — Start Beating Them to the Punch."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://img.freepik.com/premium-photo/lock-network-technology-concept_681420-5795.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            Your 24/7 Command Center Against Cyber Threats
            <br />
          </>
        }
        description="Threats don’t wait—neither should you.  At Northsling SOC & Threat Management blends expert oversight with AI to monitor, detect, and neutralize cyber risks in real time, ensuring continuous protection and faster response."
        points={[
          "24/7 monitoring to detect and respond to threats instantly",
          "AI-powered threat intelligence for faster, more accurate detection",
          "Incident response playbooks to minimize downtime and damage",
          "Proactive threat hunting to uncover risks before they escalate",
          "Compliance-ready operations aligned with global security standards",
        ]}
        stats={[
          {
            value: "77%",
            description:
              "of organizations report increased alert volumes, driving demand for more scalable SOC solutions   ",
            source: "Gurucul",
          },
          {
            value: "70%",
            description:
              "of organizations report improved threat detection and response times with SOC implementation  ",
            source: "SecuCenter",
          },
        ]}
        emphasisText="SOC & Threat Management isn’t a cost — it’s your frontline defense against financial, reputational, and operational damage."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400">
              {" "}
              SOC & Threat Management{" "}
            </span>{" "}
            Must Deliver — Or You’re Gambling
          </>
        }
        description="Today’s businesses demand defense that’s:"
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Run a SOC — We Engineer Cyber Resilience
            Across 4 Dimensions
          </>
        }
        sectionSubtitle="Northsling transforms enterprise websites across seven performance-critical dimensions to ensure your site becomes an active driver of revenue, reach, and resilience."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="BFSI Enterprise Slashes Response Time 85% and Gains 24×7 Visibility through Northsling’s Virtual SOC"
        description=" Northsling deployed a virtual SOC for a BFSI firm, slashing response times and boosting security oversight.

"
        image="https://intglobal.com/wp-content/uploads/2025/05/Security-Operations-Center-SOC-Threat-Management.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free SOC Maturity
& Threat Posture Assessment"
        points={[
          "  Attack Surface Snapshot",
          "Threat Readiness Scorecard",
          "Executive Risk Heatmap",
          "30-min Strategy Consultation",
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

export default Governance;
