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
  Edit3,
  Globe,
  Target,
  Zap,
  Plug,
  Shield,
  Layers,
  FileCheck,
  Code2,
  Cloud,
  ShieldCheck,
  Brain,
  LayoutGrid,
  Rocket,
} from "lucide-react";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function Devops() {
  const features = [
    {
      icon: <Rocket className="w-7 h-7 text-yellow-400" />,
      desc: "Launch faster than the competition",
    },
    {
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      desc: "Stay online with zero-compromise reliability",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      desc: "Eliminate MTTR delays and deployment friction",
    },
    {
      icon: <Cloud className="w-7 h-7 text-yellow-400" />,
      desc: "Automate security, compliance, and testing",
    },
    {
      icon: <Code2 className="w-7 h-7 text-yellow-400" />,
      desc: "Shift security left with DevSecOps baked in",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />,
      desc: "Empower developers with self-service environments",
    },
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />,
      desc: "Standardize and scale pipeline governance",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-yellow-400" />,
      desc: "Integrate seamlessly with your cloud, tools, and teams",
    },
  ];

  const uiFeatures = [
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "Velocity Mapping",
      desc: "Diagnose and eliminate time sinks across your release flow.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "nfrastructure as Code Enablement",
      desc: "Govern and scale infra through Terraform, Kubernetes, and Ansible",
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: "Pipeline Resilience Engineering",
      desc: "CI/CD pipelines with alerting, rollback, and auto-heal built in.",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Embedded DevSecOps",
      desc: "OWASP, SAST/DAST, and policy-as-code embedded from Day 1.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
      title: "SRE-Led Monitoring & Governance",
      desc: "SLOs, runbooks, and observability powered by Grafana and Prometheus.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
      title: "FinOps & Cost Visibility",
      desc: "Track and optimize spend without sacrificing performance.",
    },
  ];

  const stats = [
    {
      value: "55%",
      label: "faster release cycles, reducing time to production",
    },
    {
      value: "61%",
      label: "fewer rollback incidents, enabled by testing and automation",
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
    <div className="">
      <HeroSection
        title={
          <>
            Your Code Moves Fast. <br />
            Your Infrastructure Should Fly.
          </>
        }
        subtitle="Unlock Faster Releases, Safer Deployments, and Infra Cost Savings"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://intglobal.com/wp-content/uploads/2025/05/DevOps-Excellence-scaled.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            From Code to Customer — Without the Bottlenecks
            <br />
          </>
        }
        description="DevOps isn’t just about tools — it’s about culture, speed, and reliability. At Northsling,we embed DevOps practices that break silos, automate delivery, and ensure software moves from idea to production seamlessly."
        points={[
          "   Automated CI/CD pipelines for rapid, reliable deployments",
          "Collaboration frameworks that align dev, QA, and ops into one team",
          "Infrastructure as Code (IaC) for consistency and scalability",
          "Continuous testing & monitoring to catch issues before they impact users",
          "Metrics-driven optimization to improve release speed and system stability",
        ]}
        stats={[
          {
            value: "30%",
            description:
              "reduction in development and operational costs on average by teams implementing mature DevOps practices ",
            source: "RadixWeb",
          },
          {
            value: "48%",
            description:
              "faster software development cycles reported by organizations with advanced DevOps practices  ",
            source: "Spacelift",
          },
        ]}
        emphasisText="DevOps Excellence isn’t just process improvement — it’s the operating model for high-performing digital businesses."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400"> DevOps</span> Must Absolutely Get
            Right
          </>
        }
        description="DevOps isn’t just about speed — it’s about precision, protection, and scalability under pressure."
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Do DevOps — We Engineer It Across Six
            Critical Dimensions <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="At Northsling, DevOps isn’t a tooling sprint — it’s a strategic overhaul of how you build, ship, and secure software at scale.:"
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="DevOps Automation Delivers 55% Faster Releases and 61% Fewer Rollbacks for Everlink"
        description="Northsling built a DevOps CoE for Everlink, streamlining deployment pipelines and enforcing policy-driven infrastructure governance.
"
        image="https://intglobal.com/wp-content/uploads/2025/05/Everlink.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free DevOps Excellence Audit"
        points={[
          "  90-minute Discovery Session",
          "DevOps Maturity Scorecard",
          "Personalized Roadmap and Quick Wins",
          "Toolchain Optimization Report",
        ]}
        buttonText="Schedule Your Free Assessment"
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

export default Devops;
