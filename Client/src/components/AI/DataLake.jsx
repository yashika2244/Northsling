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
import ContactForm from "../../pages/success/ContactForm";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
function DataLake() {
 const features = [
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />, // Unified Data Lakes -> multiple layers / unified
    title: "Unified Data Lakes",
    desc: "One clean source of truth across ERP, CRM, apps, and cloud",
  },
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />, // Real-Time Dashboards -> global visibility / live data
    title: "Real-Time Dashboards",
    desc: "Live data = faster, smarter decisions",
  },
  {
    icon: <Target className="w-7 h-7 text-yellow-400" />, // Role-Based BI -> accuracy / target
    title: "Role-Based BI",
    desc: "Different views for finance, ops, CXOs — all from the same data",
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />, // Compliance-First Design -> security / compliance
    title: "Compliance-First Design",
    desc: "SOC2, HIPAA, GDPR baked in",
  },
  {
    icon: <Brain className="w-7 h-7 text-yellow-400" />, // AI & Predictive Readiness -> intelligence / future-ready
    title: "AI & Predictive Readiness",
    desc: "Future-proof architecture for next-gen analytics",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Governed Access -> verified / secured
    title: "Governed Access",
    desc: "RBAC, audit trails, version control",
  },
  {
    icon: <Edit3 className="w-7 h-7 text-yellow-400" />, // Self-Service Interfaces -> editable / customizable
    title: "Self-Service Interfaces",
    desc: "Dashboards anyone can use, not just analysts",
  },
  {
    icon: <Cloud className="w-7 h-7 text-yellow-400" />, // Scalable Cloud Backbone -> cloud / scalable
    title: "Scalable Cloud Backbone",
    desc: "Azure, AWS, GCP with autoscaling and resilience",
  },
];

  const stats = [
    {
      value: "55%",
      label:
        "reduction in operational costs",
    },
    {
      value: "28%",
      label: "faster reporting",
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
 const uiFeatures = [
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Data Lakes with Purpose -> structured layers
    title: "Data Lakes with Purpose",
    desc: "We design lakes to serve specific departments and goals — not just store information.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />, // Real-Time Decision Systems -> fast / real-time
    title: "Real-Time Decision Systems",
    desc: "Live data pipelines from Kafka, Spark, and APIs flow into dashboards that enable action.",
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-orange-500" />, // BI for Business -> structured dashboard / grid
    title: "BI for the Business, Not Just Analysts",
    desc: "We create role-based, no-code dashboards that non-technical teams can use daily.",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />, // Automation-Ready Architecture -> intelligence / AI
    title: "Automation-Ready Architecture",
    desc: "From ETL to anomaly detection, our stack supports scalable automation at every level.",
  },
  {
    icon: <Plug className="w-6 h-6 text-orange-500" />, // Plug & Perform Integrations -> connectivity / integration
    title: "Plug & Perform Integrations",
    desc: "Whether you use SAP, Salesforce, or Stripe, we make them work in sync — fast",
  },
  {
    icon: <Target className="w-6 h-6 text-orange-500" />, // Actionable KPIs -> focus / target metrics
    title: "Actionable KPIs, Not Vanity Metrics",
    desc: "Our dashboards tell you what to fix, not just what happened.",
  },
];
  return (
    <div>
      <HeroSection
        title={<>Finally, a Data Platform That Speaks Your Language</>}
        subtitle="The faster you make decisions, the faster you grow. Northsling helps you do both."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://th.bing.com/th/id/OIP.a4QDa-QqupTD_YNVthMklgHaDo?w=321&h=171&c=7&r=0&o=7&pid=1.7&rm=3"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            More than storage, more than dashboards — Data Lake & BI are clarity
            in action <br />
          </>
        }
        description="At Northsling), we help organizations consolidate scattered data into scalable lakes, and transform it into actionable intelligence with BI that leaders can trust"
        points={[
          " Centralized data lakes that unify siloed sources into one trusted foundation",
          "Real-time BI dashboards tailored for executives and frontline teams",
          "Self-service analytics that empower faster, independent decision-making",
          "Data governance and security frameworks for compliance and trust",
          "Scalable architectures ready for advanced AI and predictive analytics",
        ]}
        stats={[
          {
            value: "24.6%",
            description:
              "average reduction in data management costs by consolidating siloed information into centralized data lakes ",
            source: "Coherent Market Insights",
          },
          {
            value: "27%",
            description:
              "average revenue increase reported by businesses using BI to optimize operations and enhance customer engagement",
            source: " BARC Research",
          },
        ]}
        emphasisText="Data Lake & BI aren’t just about reporting — they’re how businesses cut through noise, see clearly, and act decisively."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Enterprise
            <span className="text-yellow-400">Data & BI Platforms</span> Must
            Absolutely Get Right
          </>
        }
        description="Your business doesn’t need more charts. It needs:"
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northling Doesn’t Just Deliver BI — We Build Data Engines for{" "}
            <br className="hidden md:block" />
            <span className="text-orange-500">Real-Time Enterprise Ops</span>
          </>
        }
        sectionSubtitle="Most data platforms stop at visualization. We go further — we build operational data engines that power every business decision."
        features={uiFeatures}
      /> <CaseStudySection
              tag="Case Study"
              title="Biocon has cut reconciliation time by 47% and improved variance detection by 3x with Northling’s Data Lake & BI platform"
              description="Northling helped Biocon build a compliant, cloud-native data lake with audit-ready BI dashboards across R&D and manufacturing units."
              image="https://th.bing.com/th/id/OIP.nKyr8vVFNUEGgZ6UuGq4tQHaE8?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              stats={stats}
              ctaText="Read full case study"
              ctaLink="#"
            />
             <UxAuditSection
                    logoText="NS"
                    heading="Start With the BI Jumpstart Pack (It’s Free)"
                    points={[
                      "A fast audit of your current dashboards and data flows",
                      "A custom dashboard using your business KPIs",
                      "A punch list of 3 impactful improvements",
                      "Delivered in 5 days. Zero obligation",
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

export default DataLake;
