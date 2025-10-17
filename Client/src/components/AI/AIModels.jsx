import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
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
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import ContactForm from "../../pages/success/ContactForm";
function AIModels() {
  const features = [
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />, // Unified Data Lakes -> multiple layers / unified
      title: "Context-Aware Training",
      desc: "Models built on your structured + unstructured data",
    },
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />, // Real-Time Dashboards -> global visibility / live data
      title: "Real-Time Execution",
      desc: "Decisions made while the customer is still on screen",
    },
    {
      icon: <Target className="w-7 h-7 text-yellow-400" />, // Role-Based BI -> accuracy / target
      title: "Plug-and-Play Integration",
      desc: "AI that works with your CRM, ERP, and cloud",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />, // Compliance-First Design -> security / compliance
      title: "Scalable Infrastructure",
      desc: "Hybrid-cloud ready, auto-scaling, secure",
    },
    {
      icon: <Brain className="w-7 h-7 text-yellow-400" />, // AI & Predictive Readiness -> intelligence / future-ready
      title: "AI Governance",
      desc: "Explainability, audit trails, fairness protocols",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Governed Access -> verified / secured
      title: "Observability",
      desc: "Dashboards that track drift, ROI, and usage",
    },
    {
      icon: <Edit3 className="w-7 h-7 text-yellow-400" />, // Self-Service Interfaces -> editable / customizable
      title: "Human-in-the-Loop",
      desc: "Oversight when needed, autonomy when earned",
    },
    {
      icon: <Cloud className="w-7 h-7 text-yellow-400" />, // Scalable Cloud Backbone -> cloud / scalable
      title: "Rapid Time-to-Value",
      desc: "Pilot to production in under 8 weeks",
    },
  ];
  const uiFeatures = [
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />, // Data Lakes with Purpose -> structured layers
      title: "Discovery + Use Case Mapping",
      desc: "High-impact opportunities. Real business alignment.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />, // Real-Time Decision Systems -> fast / real-time
      title: "Custom Model Development",
      desc: "Built with your context: from customer behavior to sensor streams.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />, // BI for Business -> structured dashboard / grid
      title: "Real-Time AI Agents",
      desc: "Models that trigger actions, not just predictions.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />, // Automation-Ready Architecture -> intelligence / AI
      title: "Seamless Integrations",
      desc: "CRM, ERP, IoT, Data Lakes — zero duct tape.",
    },
    {
      icon: <Plug className="w-6 h-6 text-orange-500" />, // Plug & Perform Integrations -> connectivity / integration
      title: "MLOps & Governance",
      desc: "CI/CD pipelines, versioning, explainability, audit trails.",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />, // Actionable KPIs -> focus / target metrics
      title: "Post-Go-Live Optimization",
      desc: "Drift detection, feedback loops, ROI monitoring built-in.",
    },
  ];
  const stats = [
    {
      value: "31%",
      label: "increase in conversion rates from personalized campaigns",
    },
    {
      value: "3x ",
      label: "ROI in just 90 days through hyper-targeted outreach",
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
            Decisions. Delivered.
            <br />
            While You Sleep.
          </>
        }
        subtitle="We turn your data into action — with AI models that don’t wait, guess, or stall."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://techbriefly.com/wp-content/uploads/2023/06/Best-AI-3D-model-generators.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            From Data to Decisions — Faster
            <br />
          </>
        }
        description="AI models aren’t off-the-shelf add-ons — they’re the intelligence engines that power modern business. At Northsling, we design, train, and deploy custom AI models built around your data, industry, and growth goals."
        points={[
          " Custom-built models tailored to your industry and use cases",
          "Predictive intelligence for forecasting demand, trends, and risks",
          "Natural language models for smarter search, support, and automation",
          "Computer vision and ML for quality checks, monitoring, and compliance",
          "Continuous learning models that improve accuracy and efficiency over time",
        ]}
        stats={[
          {
            value: "78%",
            description:
              "of companies globally use AI in at least one business function for productivity and growth ",
            source: "McKinsey",
          },
          {
            value: "83%",
            description:
              "of companies list AI as a top business priority, accelerating decision-making and innovation ",
            source: "Exploding Topics",
          },
        ]}
        emphasisText="AI models aren’t experiments — they’re the decision engines that help businesses compete smarter and grow faster."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Real-
            <span className="text-yellow-400">World AI</span> Must Deliver — or
            It’s Just Another Slide Deck
          </>
        }
        description="If it doesn’t do these, it’s not enterprise-grade:"
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northling Doesn’t Just Build Models — We Engineer Enterprise AI
            Ecosystems <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="This is how we make AI deliver real-world results:"
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Retail Brand Lifts Conversions 31% & 3x ROI in 90 Days with Northsling
AI Segmentation Model"
        description="A major omni-channel retailer adopted Northsling’s behavioral ML model for real-time customer segmentation and CRM-linked campaigns."
        image="https://intglobal.com/wp-content/uploads/2025/05/AI-Models.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
                 <UxAuditSection
                          logoText="NS"
                          heading="Get a Free AI Value
Discovery Session"
                          points={[
                            "AI Use-Case Blueprint customized to your business",
                            "ROI Simulation Report based on your inputs",
                            "1-hour Strategy Session with INT. AI Architects",
                            "Data Readiness + Integration Feasibility Snapshot",
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

export default AIModels;
