import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import {
  Layers,
  Globe,
  Target,
  Zap,
  Plug,
  Shield,
  Cloud,
  ShieldCheck,
  Brain,
  LayoutGrid,
  Rocket,
  FileCheck,
  Code2,
} from "lucide-react";

import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import ContactForm from "../../pages/success/ContactForm";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
function AdvancedAnalytics() {
 const features = [
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />,
      title: "Real-Time Intelligence",
      desc: "Live dashboards that trigger action — not just reports",
    },
    {
      icon: <Brain className="w-7 h-7 text-yellow-400" />,
      title: "Predictive & Prescriptive Models",
      desc: "Know what's next — and what to do about it",
    },
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />,
      title: "Cross-System Data Unification",
      desc: "From CRM to ERP, all in one intelligent view",
    },
    {
      icon: <Target className="w-7 h-7 text-yellow-400" />,
      title: "AI-Powered Segmentation",
      desc: "Personalized targeting, zero guesswork",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />,
      title: "Fraud & Risk Alerts",
      desc: "Catch threats before they escalate",
    },
    {
      icon: <Rocket className="w-7 h-7 text-yellow-400" />,
      title: "Automated Decision Systems",
      desc: "Analytics that don’t just inform, but act",
    },
    {
      icon: <Cloud className="w-7 h-7 text-yellow-400" />,
      title: "Scalable Cloud Infrastructure",
      desc: "Grow with confidence, without performance trade-offs",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      title: "Compliance by Design",
      desc: "GDPR, ISO 27001, SOC2 baked into every layer",
    },
  ];
 const uiFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Real-Time Intelligence",
      desc: "Stream live insights from every platform — CRM, ERP, web, IoT — into action-ready dashboards.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: "Predictive Analytics",
      desc: "Train models on your business KPIs to forecast churn, demand, downtime, and more.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Prescriptive Engines",
      desc: "Deliver AI-backed next best action recommendations that drive outcomes.",
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />,
      title: "Data Unification",
      desc: "Merge siloed data from legacy, cloud, and third-party systems into a single source of truth.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-orange-500" />,
      title: "Cognitive Systems",
      desc: "Adaptive models that learn and optimize with every interaction.",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Security & Compliance Frameworks",
      desc: "Fully governed data pipelines — secure, auditable, and compliant from Day 1.",
    },
  ];

  const stats = [
    {
      value: "75%",
      label:
        "reduction in fraud incidents",
    },
    {
      value: "35%",
      label: "faster fraud resolution time",
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
        title={<>Smarter Data. Sharper Decisions.</>}
        subtitle="Advanced Analytics That Accelerate Growth, Precision, and Profit"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://intglobal.com/wp-content/uploads/2025/05/Data-Lake-BI-scaled.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
           Raw data is worthless without the ability to predict what comes next <br />
          </>
        }
        description="At Northsling),help businesses move from hindsight to foresight, uncovering trends, risks, and opportunities before they surface through advanced analytics."
        points={[
          "Predictive analytics to anticipate customer behavior and market shifts",
          "Prescriptive insights that recommend the best actions for growth",
          "Machine learning models tailored to your industry and business needs",
          "Scenario simulations for smarter strategy and risk management",
          "Real-time analytics pipelines for decisions at the speed of business",
        ]}
        stats={[
          {
            value: "27%",
            description:
              "average increase in revenue reported by businesses using advanced analytics to optimize operations and customer engagement ",
            source: "BARC Research",
          },
          {
            value: "74%",
            description:
              "average revenue increase reported by businesses using BI to optimize operations and enhance customer engagementof companies state that analytics and intelligence software significantly improve decision-making across departments ",
            source: "Kanerika",
          },
        ]}
        emphasisText="Advanced Analytics isn’t reporting — it’s your unfair advantage in staying ahead of change."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Enterprise
            <span className="text-yellow-400">Analytics</span> Must Absolutely Get Right
          </>
        }
        description="Your business doesn’t need prettier dashboards. It demands:"
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Analyze Data — We Engineer Intelligence Across 7 Dimensions{" "}
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="We turn disconnected data into your biggest competitive advantage."
        features={uiFeatures}
      /> <CaseStudySection
              tag="Case Study"
              title="A leading bank reduced fraud cases by 73% and improved anomaly detection 4x with Northsling’s AI-Powered Analytics"
              description="A leading bank deployedNorthsling's real-time fraud analytics engine to shift from reactive monitoring to predictive intervention."
              image="https://intglobal.com/wp-content/uploads/2025/05/Advanced-Analytics-768x469.png"
              stats={stats}
              ctaText="Read full case study"
              ctaLink="#"
            />
             <UxAuditSection
                    logoText="NS"
                    heading="Get a Free Advanced Analytics Health Audit"
                    subtitle="See where your analytics are holding you back — and how to fix it fast."
                    points={[
                      "Real-Time Readiness Scorecard",
                      "AI/ML Opportunity Mapping",
                      "Integration & Infrastructure Gap Report",
                      "Modernization Playbook for Your Business",
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

export default AdvancedAnalytics;
