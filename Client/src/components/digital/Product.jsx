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
function Product() {
  const features = [
    {
      icon: <Server className="w-7 h-7 text-yellow-400" />, // Real-Time Data Synchronization -> server / data
      title: "Cloud-Native & Modular",
      desc: "Architected for scale with fault-tolerant, containerized microservices.",
    },
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />, // Cross-System Orchestration -> global / network
      title: "Velocity-Ready",
      desc: "Agile, CI/CD-driven, and automation-rich for faster sprints and safe rollouts.",
    },
    {
      icon: <Activity className="w-7 h-7 text-yellow-400" />, // Predictive Intelligence -> analytics / monitoring
      title: "Secure & Compliant",
      desc: "Embedded with GDPR, HIPAA, PSD2 compliance frameworks",
    },
    {
      icon: <Cpu className="w-7 h-7 text-yellow-400" />, // Elastic Scalability -> compute / dynamic
      title: "User-Centric",
      desc: "With UX and performance baked into every iteration",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />, // Built-In Compliance -> protection / security
      title: "Intelligent",
      desc: "With product analytics, growth loops, and AI-driven features by design.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Frictionless UX -> verified / quality
      title: "Future-Proof",
      desc: "Built to evolve, integrate, and differentiate at speed.",
    },
    {
      icon: <Box className="w-7 h-7 text-yellow-400" />, // Low-Code Configurability -> modular / configurable
      title: "Cost-Conscious",
      desc: "Designed for efficiency without compromising innovation or reliability",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // Audit-Ready Visibility -> verified / traceable
      title: "Cross-Platform Capable",
      desc: "Seamlessly delivering experiences across web, mobile, and emerging interfaces",
    },
  ];
  const uiFeatures = [
    {
      icon: <Code2 className="w-6 h-6 text-orange-500" />, // Platform-Agnostic Expertise -> coding / platform
      title: "Speed with Stability",
      desc: "Rapid MVPs built without compromising long-term resilience.",
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />, // Cloud-Native DNA -> layers / cloud
      title: "Elastic Scalability",
      desc: "Cloud-native systems designed to thrive under 10x growth.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // Security-First Mindset -> verified security
      title: "Regulatory Readiness",
      desc: "Compliance frameworks built in—not bolted on.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />, // AI-Infused Intelligence -> intelligence / ML
      title: "UX That Converts",
      desc: "Intuitive, inclusive journeys that drive adoption and loyalty.",
    },
    {
      icon: <Repeat className="w-6 h-6 text-orange-500" />, // Plug-and-Play Integrations -> seamless flow / repeatable
      title: "Real-Time Insights",
      desc: "Dashboards and metrics that guide decisions, not guesswork.",
    },
  ];
  const stats = [
    {
      value: "35%",
      label: "reduction in product release cycle time",
    },
    {
      value: "44%",
      label: "faster feature deployment rate",
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
        title={<>From Codebase to Competitive Edge</>}
        subtitle="Product Engineering Solutions That Build Market Winners"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://miro.medium.com/v2/resize:fit:1200/1*E64ePYo8JOzDae5FtfGwZQ.png"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Product Engineering isn’t about building features — it’s about
            building products that last, scale, and dominate markets
            <br />
          </>
        }
        description="At  (Northsling), we design, develop, and optimize digital products that are resilient, scalable, and built to stay ahead of customer expectations and competitor imitations."
        points={[
          "End-to-end product lifecycle management — from idea to scale",
          "Agile, cloud-native development that speeds time-to-market",
          "Modular, scalable architectures that evolve with business needs",
          "Seamless integration with existing platforms and ecosystems",
          "Continuous testing, support, and optimization for long-term value",
        ]}
        stats={[
          {
            value: "50%",
            description:
              "reduction in time-to-market is achieved by enterprises leveraging agile product engineering practices ",
            source: "McKinsey.",
          },
          {
            value: "40%",
            description:
              "iimprovement in product quality and customer satisfaction through collaboration with specialized engineering services ",
            source: "fortunebusinessinsights.",
          },
        ]}
        emphasisText="Your product is your business. We engineer it for performance, compliance, and customer delight."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What High -
            <span className="text-yellow-400">Growth Product Leaders </span>{" "}
            Need Today
          </>
        }
        description="To build digital products that lead markets, your engineering needs to be:"
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Northsling Engineers Products for 2025—and Beyond{" "}
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="94% of digital leaders say engineering maturity fuels growth. $1.2 trillion is lost annually due to poor product execution."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Leading Insurance Provider Achieves 3x Faster Launches with Northsling’s Product Engineering Service"
        description="A leading insurer reengineered its product lifecycle using Northsling’s's agile co-development framework, launching multiple insurance products in under six months."
        image="https://th.bing.com/th/id/OIP.xivHLIi4rlFTHRSrQCLWqAHaEO?w=292&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Product Engineering Consultation"
        subheading="Discover what’s holding back your speed, stability, and scalability."
        points={[
          "Tech stack & architecture assessment",
          "Velocity roadmap with risk flags",
          "Compliance & cost optimization review",
          "30-min strategy session with a senior architect",
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

export default Product;
