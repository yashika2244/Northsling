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
  Search,       
  Target,      
  Zap,          
  FileText,     
  BarChart2,    
  Layers,     
  Users        ,
    Eye,          
  Grid,        
  BookOpen,  
  BarChart3 ,AlertTriangle ,
  ShieldCheck ,
  Shield ,
  RefreshCcw 
} from "lucide-react";

import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function Email() {

const features = [
  {
    icon: <Search className="w-7 h-7 text-yellow-400" />,
    title: "Risk Discovery",
    desc: "Identify threats across email traffic, attachments, cloud collaboration apps, and user behavior",
  },
  {
    icon: <AlertTriangle className="w-7 h-7 text-yellow-400" />,
    title: "Impact-Based Prioritization",
    desc: "Rank vulnerabilities by potential to cause data leaks, financial fraud, or regulatory violations",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "Actionable Remediation",
    desc: "Deliver focused remediation plans—from phishing quarantine to auto-removal from inboxes",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: "Regulatory Alignment",
    desc: "Map email handling and logging to ISO 27001, DPDP, RBI, HIPAA, and more",
  },
  {
    icon: <FileText className="w-7 h-7 text-yellow-400" />,
    title: "Executive Translation",
    desc: "Convert complex email threats into boardroom-ready business risks",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
    title: "Risk Quantification",
    desc: "Express potential email breaches in financial terms to drive investment",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />,
    title: "Ongoing Advisory",
    desc: "Provide continuous guidance to maintain secure and compliant email environments",
  },
  {
    icon: <Users className="w-7 h-7 text-yellow-400" />,
    title: "Stakeholder Enablement",
    desc: "Equip IT, compliance, and CXOs to lead email threat reduction initiatives",
  },
];
  
const uiFeatures = [
  {
    icon: <Eye className="w-6 h-6 text-orange-500" />,
    title: "Business-Aligned Risk Mapping",
    desc: "Every vulnerability we identify is tied to data sensitivity, user impact, and compliance obligations.",
  },
  {
    icon: <Grid className="w-6 h-6 text-orange-500" />,
    title: "360° Email Surface Coverage",
    desc: "Inboxes, attachments, OneDrive, Teams, SharePoint, Slack—nothing gets missed",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: "Tactical + Strategic Playbooks",
    desc: "From isolating compromised users to executive-level incident readiness—we arm you to act.",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Real-World Threat Modeling",
    desc: "Simulate phishing and malware attacks to see how your users and systems respond.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
    title: "Executive Dashboards & Heatmaps",
    desc: "Turn technical risk signals into clear business language and audit-ready reports.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-orange-500" />,
    title: "Post-Audit Advisory",
    desc: "90-day support to sustain visibility, remediation, and alignment with emerging compliance mandates.",
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
           Your Risk Is Hiding in Plain Sight.
            <br />
      Expose What Matters.
          </>
        }
        subtitle="Email Security Isn’t a Checkbox Anymore. It’s Your Next Competitive Edge."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://t3.ftcdn.net/jpg/09/86/90/70/360_F_986907025_3k2QGgcSS3W9hICU2kgf6LOeIqjYf05z.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
        Because One Bad Email Can Cost Millions
            <br />
          </>
        }
        description="Email is the top entry point for phishing, ransomware, and data leaks. Legacy defenses can’t keep up At Northsling provides advanced email security that blocks threats before they reach inboxes, protects sensitive data, and ensures regulatory compliance."
        points={[
      "Advanced threat detection that stops phishing, malware, and zero-day exploits",
'Data loss prevention (DLP) to protect sensitive business information',
'Encryption and archiving to secure communications and maintain records',
"Policy-based controls to enforce compliance across industries (GDPR, HIPAA, PCI, etc.)",
'Real-time monitoring & reporting for visibility and accountability,',
        ]}
        stats={[
          {
            value: "40%",
            description:
              " reduction in phishing-related incidents after implementing advanced email threat protection solutions  ",
            source: "Barracuda",
          },
          {
            value: "65%",
            description:
              "faster threat detection and response times due to automated email security and compliance monitoring  ",
            source: "Mordor Intelligence",
          },
        ]}
        emphasisText="Email Threat Protection & Compliance isn’t IT hygiene — it’s business-critical defense against financial, legal, and reputational risk."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400">  Email Security Audits </span> Must
         Must Absolutely Get Right
          </>
        }
        description="Today’s enterprises need more than spam filters and basic gateways — they need strategic assessments that surface real email-borne risks, align IT and compliance teams, and drive decisive action.

"
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Do Email Security Audits—We Engineer Messaging Resilience Across 6 Dimensions
          </>
        }
        sectionSubtitle="Modern email threats demand more than basic perimeter defense. Northsling delivers outcomes that reduce breach risk and increase compliance across every messaging layer."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Digital Lender Achieves DPDP Compliance in 8 Weeks & Cuts Phishing Exposure 40% with Northsling"
        description=" A Southeast Asia-based digital lender partnered with Northsling to conduct a comprehensive audit of its email and messaging environment and align with regulatory mandates across fintech workflows.

"
        image="https://intglobal.com/wp-content/uploads/2025/08/Email-security.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Email Security Risk Assessment"
        points={[
" Executive summary exposure report",
"Business impact scorecard",
"Top 5 strategic action priorities",
"30-minute expert consult",
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

export default Email;
