import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
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
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import ContactForm from "../../pages/success/ContactForm";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";

function Bussiness() {
  const features = [
    {
      icon: <Server className="w-7 h-7 text-yellow-400" />, // Real-Time Data Synchronization -> server / data
      title: "Real-Time Data Synchronization",
      desc: "Every user and system works off a single version of the truth",
    },
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />, // Cross-System Orchestration -> global / network
      title: "Cross-System Orchestration",
      desc: "Seamless flows across ERP, CRM, HRMS, and more",
    },
    {
      icon: <Activity className="w-7 h-7 text-yellow-400" />, // Predictive Intelligence -> analytics / monitoring
      title: "Predictive Intelligence",
      desc: "Bottlenecks flagged before they cause damage",
    },
    {
      icon: <Cpu className="w-7 h-7 text-yellow-400" />, // Elastic Scalability -> compute / dynamic
      title: "Elastic Scalability",
      desc: "Growth without process rewrites",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />, // Built-In Compliance -> protection / security
      title: "Built-In Compliance",
      desc: "ISO, GDPR, HIPAA from Day One",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Frictionless UX -> verified / quality
      title: "Frictionless UX",
      desc: "Interfaces your teams actually want to use",
    },
    {
      icon: <Box className="w-7 h-7 text-yellow-400" />, // Low-Code Configurability -> modular / configurable
      title: "Low-Code Configurability",
      desc: "Empower business users to modify workflows without IT delays",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // Audit-Ready Visibility -> verified / traceable
      title: "Audit-Ready Visibility",
      desc: "Full traceability across tasks, changes, and approvals",
    },
  ];

  const uiFeatures = [
    {
      icon: <Code2 className="w-6 h-6 text-orange-500" />, // Platform-Agnostic Expertise -> coding / platform
      title: "Platform-Agnostic Expertise",
      desc: "Camunda, Airflow, Zeebe, low-code — we adapt to your stack",
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />, // Cloud-Native DNA -> layers / cloud
      title: "Cloud-Native DNA",
      desc: "AWS, Azure, GCP implementations that scale securely",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // Security-First Mindset -> verified security
      title: "Security-First Mindset",
      desc: "SOC2, ISO 27001, GDPR, HIPAA compliance built-in",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />, // AI-Infused Intelligence -> intelligence / ML
      title: "AI-Infused Intelligence",
      desc: "Workflows that learn, adapt, and optimize",
    },
    {
      icon: <Repeat className="w-6 h-6 text-orange-500" />, // Plug-and-Play Integrations -> seamless flow / repeatable
      title: "Plug-and-Play Integrations",
      desc: "ERP, CRM, HRMS, legacy — all connected",
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />, // Accelerated Delivery -> fast launch
      title: "Accelerated Delivery",
      desc: "Prebuilt templates, smart connectors, agile pods",
    },
  ];

  const stats = [
    {
      value: "60%",
      label: "faster product launches via automated API and fintech onboarding",
    },
    {
      value: "55%",
      label: "cut in IT ops workload via BPM-enabled self-service capabilities",
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
            Business Process Management (BPM) That Moves at the Speed of Growth.
          </>
        }
        subtitle="From Workflow Chaos to Business Process Mastery"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://img.freepik.com/premium-photo/white-geometric-squares-black-background_975254-172.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Every delay, duplicate task, or manual workaround is silent revenue
            leakage
            <br />
          </>
        }
        description="At  (Northsling), we re-engineer operations into streamlined, automated, and intelligent workflows that cut waste, reduce risk, and accelerate scale."
        points={[
          "Process re-engineering that kills bottlenecks and inefficiencies",
          "Automation that slashes manual effort and error rates",
          "AI-driven insights to optimize decisions in real time",
          "Seamless integration across systems for end-to-end visibility",
          "Adaptive frameworks that evolve with changing business demands",
        ]}
        stats={[
          {
            value: "32%",
            description:
              "cost savings realized by businesses after automating and optimizing their processes with BPM tools ",
            source: "FlowForma.",
          },
          {
            value: "41%",
            description:
              "increase in employee productivity reported from companies adopting BPM solutions ",
            source: "Cflow.",
          },
        ]}
        emphasisText="BPM is about building processes that move as fast as your business needs to."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Enterprise -
            <span className="text-yellow-400">Ready BPM Systems </span> Must
            Deliver
          </>
        }
        description="BPM isn’t just automation. It’s orchestration with intelligence."
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Is the BPM Partner You Need{" "}
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="We don’t just automate tasks. We engineer adaptive, resilient, future-ready operations.."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Equitas Bank Unlocks New Revenue & Speeds Launches with Northsling's Open Banking."
        description="Equitas Bank unlocked agility and new revenue streams with a BPM-led Open Banking overhaul on WSO2."
        image="https://th.bing.com/th/id/OIP.xYscqStHCc4T77gxAakliQHaE6?w=279&h=185&c=7&r=0&o=7&pid=1.7&rm=3"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free
BPM Performance Audit"
        subheading="Find out what’s slowing your operations down — and how to fix it."
        points={[
          "Workflow efficiency scoring",
          "Integration readiness report",
          "Compliance gap analysis",
          "Custom optimization roadmap",
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

export default Bussiness;
