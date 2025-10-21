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
function Intelligence() {
 const features = [
    {
      icon: <Rocket className="w-7 h-7 text-yellow-400" />,
      title: "Predictive Scaling",
      desc: "Elastic resources that scale dynamically without human intervention",
    },
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />,
      title: "AI-Driven Monitoring",
      desc: "Anomaly detection before incidents hit users",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      title: "Zero-Downtime Disaster Recovery",
      desc: "Automated failovers with real-time RPO/RTO management",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />,
      title: "Compliance-By-Design",
      desc: "SOC2, ISO 27001, HIPAA baked into architecture",
    },
    {
      icon: <Code2 className="w-7 h-7 text-yellow-400" />,
      title: "Infrastructure-as-Code (IaC)",
      desc: "Modular, repeatable deployments with full auditability",
    },
    {
      icon: <Brain className="w-7 h-7 text-yellow-400" />,
      title: "24/7 Observability & Incident Response",
      desc: "ISRE-led operations with custom dashboards and alerts",
    },
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />,
      title: "CI/CD Automation",
      desc: "Blue-green deployments, rollback safety, and fast-release cycles",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-yellow-400" />,
      title: "Cost Visibility & FinOps",
      desc: "Real-time cloud spend analytics and optimization",
    },
  ];


  const uiFeatures = [
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: "Autonomous Scaling",
      desc: "Infrastructure that adapts to demand without manual intervention",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Smart Automation",
      desc: "Accelerated rollouts and zero-touch provisioning for faster innovation",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Predictive Resilience",
      desc: "Proactive risk detection powered by observability and ML",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Unified Governance",
      desc: "Standardized controls across cloud, on-prem, and hybrid landscapes",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
      title: "Cost Intelligence",
      desc: "Real-time insights to eliminate overspend and optimize consumption",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Continuous Hardening",
      desc: "Security that evolves with every patch, update, and threat",
    },
  ];


  const stats = [
    {
      value: "3x",
      label:
        "increase in API scalability with no latency issues",
    },
    {
      value: "43%",
      label: "improvement in incident response time",
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
            Modernize Your Core.
            <br />
            Multiply Your Impact.
          </>
        }
        subtitle="Your Trusted Partner for Intelligent Infrastructure Management (iIM)"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://img.freepik.com/premium-photo/ai-leadership-transforming-workforces-with-deep-learning-technology_1108314-171396.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            Infrastructure That Manages Itself — and Scales With You
            <br />
          </>
        }
        description="Traditional infrastructure is costly, complex, and reactive. Intelligent Infrastructure Management changes that. At (Northsling), we combine automation, monitoring, and predictive intelligence to create infrastructures that are self-optimizing, resilient, and cost-efficient."
        points={[
          " Proactive monitoring that predicts and prevents failures",
          "       Automation-first management to cut manual intervention and downtime",
          "Elastic scaling to handle peak loads without wasted capacity",
          "Integrated security & compliance across cloud and hybrid environments",
          "Data-driven insights to optimize performance and costs continuously",
        ]}
        stats={[
          {
            value: "70%",
            description:
              "of organizations leveraging intelligent infrastructure management report improved deliverable quality, agility, and business continuity ",
            source: "BayTech Consulting",
          },
          {
            value: "30%",
            description:
              "improvement in forecasting accuracy enabled by iiM with cloud analytics and automation ",
            source: "SQ Magazine",
          },
        ]}
        emphasisText="iiM isn’t about keeping the lights on — it’s about making infrastructure a strategic enabler of growth and innovation."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400">Infrastructure</span> Must
            Absolutely Get Right
          </>
        }
        description="Today’s enterprises need more than servers and storage. They need an infrastructure backbone that adapts, protects, and accelerates."
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northling Doesn’t Just Manage Infra —
We Make It Intelligent <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Northsling Intelligent Infrastructure Management (iIM) is designed for enterprises that want more than uptime. We engineer infrastructure that:"
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="InsurTech Achieves 3x Scalability and Hardened Security via Northsling’s Infrastructure Management"
        description="Northsling  overhauled the infrastructure of a growing InsurTech to ensure API reliability, observability, and compliance at scale.
"
        image="https://intglobal.com/wp-content/uploads/2025/05/Intelligent-Infrastructure-Management-1.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Free Offer: Infrastructure
Health & Optimization Audit"
        subheading="Uncover what’s slowing your content velocity — and how to fix it."
        points={[
     "  Infra Risk Scorecard",
"Compliance Heatmap",
"Cloud Spend Optimization Blueprint",
"SRE Maturity Assessm",
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

export default Intelligence;
