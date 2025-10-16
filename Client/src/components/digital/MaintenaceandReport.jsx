import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import {
  Brain,
  Globe,
  Target,
  Zap,
  Shield,
  ShieldCheck,
  Layers,
  FileCheck,
  Code2,
  Rocket,
  Server,
  Activity,
  Cpu,
  Box,
  Repeat,
} from "lucide-react";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import ContactForm from "../../pages/success/ContactForm";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
function MaintenaceandReport() {
const features = [
  {
    icon: <Activity className="w-7 h-7 text-yellow-400" />, // Always-On Monitoring -> monitoring/analytics
    title: "Always-On Monitoring",
    desc: "Detect anomalies before users do",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />, // Tiered SLA Support -> structured / layers
    title: "Tiered SLA Support",
    desc: "Structured L1–L3 response for every issue type",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Security-First -> verified / secure
    title: "Security-First",
    desc: "Compliance-ready patching and hardening baked in",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />, // Smart Ops -> fast / lightning
    title: "Smart Ops",
    desc: "Automation, AI alerts, and knowledge bases to scale support",
  },
  {
    icon: <Target className="w-7 h-7 text-yellow-400" />, // Single-Point Ownership -> accuracy / focus
    title: "Single-Point Ownership",
    desc: "One partner, total accountability",
  },
  {
    icon: <Cpu className="w-7 h-7 text-yellow-400" />, // Scalable Cost Models -> compute / efficiency
    title: "Scalable Cost Models",
    desc: "Pay for outcomes, not firefighting",
  },
  {
    icon: <Repeat className="w-7 h-7 text-yellow-400" />, // Proactive Optimization -> continuous / repeatable
    title: "Proactive Optimization",
    desc: "Continuous tuning to boost app performance and uptime",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // Context-Rich Reporting -> report / audit
    title: "Context-Rich Reporting",
    desc: "Real-time dashboards and insights for informed decisions",
  },
];

const uiFeatures = [
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />, // Global 24/7 Support Pods -> global
    title: "Global 24/7 Support Pods",
    desc: "Round-the-clock help with regional context",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />, // AI-Powered Monitoring -> intelligence / AI
    title: "AI-Powered Monitoring",
    desc: "Faster detection, smarter response",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />, // DevSecOps Native -> security / protection
    title: "DevSecOps Native",
    desc: "Secure-by-design updates and patches",
  },
  {
    icon: <Target className="w-6 h-6 text-orange-500" />, // SLA-Governed Delivery -> accuracy / targets
    title: "SLA-Governed Delivery",
    desc: "Uptime, resolution, and transparency you can track",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Cross-Stack Expertise -> multiple layers / stacks
    title: "Cross-Stack Expertise",
    desc: "Web, mobile, cloud, legacy — all covered",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />, // Accelerated Onboarding -> speed / launch
    title: "Accelerated Onboarding",
    desc: "From audit to go-live in under 30 days",
  },
];


  const stats = [
    {
      value: "96%",
      label:
        "uptime during critical compliance updates with zero service disruption",
    },
    {
      value: "66%",
      label:
        "faster incident resolution by offloading support to INT.’s managed team",
    },
  ];
  const awardsList = [
    "/awards/deloitte1.png",
    "/awards/deloitte2.png",
    "/awards/duns1.png",
    "/awards/duns2.png",
    "/awards/sme.png",
  ];

  const statsList = [
    { value: "27+", label: "Years of Excellence" },
    { value: "10", label: "Offices Worldwide" },
    { value: "1,100+", label: "Solution Experts" },
    { value: "500+", label: "Worldwide Happy Clients" },
  ];
  return (
    <div>
      <HeroSection
        title={
          <>
            Maintenance & Support That’s Always On - Ensuring Your Peace of Mind
          </>
        }
        subtitle="Proactive Stability. Predictable Performance. Scalable Support.

"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://tse2.mm.bing.net/th/id/OIP._R3BGb0cFpszVPLBs7qPJAHaEJ?w=2000&h=1121&rs=1&pid=ImgDetMain&o=7&rm=3"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Every minute of downtime costs revenue, trust, and momentum
            <br />
          </>
        }
        description="At  (Northsling), keeps your systems resilient, secure, and high-performing so you can scale without disruption and stay ahead of customer expectations."
        points={[
          "Preventive maintenance that eliminates costly downtime",
          "Round-the-clock monitoring and instant issue resolution",
          "Performance tuning for faster, smoother user experiences",
          "Security-first updates to block vulnerabilities and risks",
          "Flexible support models aligned to your growth needs",
        ]}
        stats={[
          {
            value: "30%",
            description:
              "ROI over three years is reported by companies modernizing their maintenance systems   ",
            source: "BayOne",
          },
          {
            value: "21%",
            description:
              "median cost per hour of manufacturing downtime prevented by effective maintenance programs ",
            source: "OxMaint ",
          },
        ]}
        emphasisText="Maintenance & Support isn’t about fixing issues — it’s about ensuring your business never slows down."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400">Enterprises Expect</span> from
            Maintenance Services
          </>
        }
        description="QModern AMS (Application Maintenance Services) is no longer about waiting for issues. It’s about eliminating them before they start. "
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Northsling Maintenance & Support Services — Always-On, Always-Ahead
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle=" We go beyond support tickets. We build resilient digital ecosystems."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="A leading financial brand ensured 24/7 uptime and zero-downtime compliance with Northsling’s Flexi AMC Model"
        description="A leading national bank partnered with Northsling’s for Flexi Hours AMC to ensure 24/7 brand site uptime, regulatory agility, and digital continuity."
        image="https://editorial01.shutterstock.com/preview-440/12214949b/493b5b1b/Shutterstock_12214949b.jpg"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Let’s Make Downtime a Thing of the Past"
        subheading="Book Your Free Maintenance Readiness Consultation"
        points={[
          "SLA Alignment & Support Fit Assessment",
          "Downtime Risk Scoring & Optimization Report",
          "30-Min Strategy Call with AMS Experts",
        ]}
        buttonText="Schedule Your Free Assessment"
        buttonAction={() => console.log("Button clicked!")}
      />
      <WhoWeAreSection
        tag="WHO WE ARE"
        title="At Northsling, excellence and innovation drive everything we do."
        description="We go beyond maintaining operations—we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape."
        stats={statsList}
        awards={awardsList}
        primaryColor="text-blue-600"
      />
      <ContactForm />
    </div>
  );
}

export default MaintenaceandReport;
