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

function ParentCrm() {
const features = [
  {
    icon: <Brain className="w-7 h-7 text-yellow-400" />, // Intelligence fits 360° Customer Intelligence
    title: "360° Customer Intelligence",
    desc: "Unified, real-time interaction and data views",
  },
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />, // Globe fits Omnichannel Experience
    title: "Omnichannel Experience",
    desc: "Seamless customer journeys across channels",
  },
  {
    icon: <Target className="w-7 h-7 text-yellow-400" />, // Target fits Predictive Personalization
    title: "Predictive Personalization",
    desc: "AI-driven actions before the customer asks",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />, // Zap fits Instant Insights / fast automation
    title: "Instant Insights",
    desc: "Dashboards that drive real-time, contextual decisions",
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />, // Shield fits Scalable Infrastructure
    title: "Scalable Infrastructure",
    desc: "From hundreds to millions of customers",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // ShieldCheck fits Enterprise-Grade Security
    title: "Enterprise-Grade Security",
    desc: "GDPR, HIPAA, CCPA-compliant, by design",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />, // Layers fits Automated Workflows
    title: "Automated Workflows",
    desc: "Trigger-based journeys that reduce manual intervention",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // FileCheck fits Integrated Sales & Support
    title: "Integrated Sales & Support",
    desc: "One CRM for lead-gen, nurturing, and post-sale care",
  },
];

const uiFeatures = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />, // Code for Platform-Agnostic CRM Expertise
    title: "Platform-Agnostic CRM Expertise",
    desc: "Salesforce, Dynamics, HubSpot, Zoho",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Layers for Modular & Future-Ready Builds
    title: "Modular & Future-Ready Builds",
    desc: "Cloud-native, API-first, low-code friendly",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // ShieldCheck for Security-First Engineering
    title: "Security-First Engineering",
    desc: "ISO 27001, SOC2, CMMI certified",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />, // Brain for Embedded Intelligence
    title: "Embedded Intelligence",
    desc: "AI, ML, customer health scoring baked-in",
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />, // Globe for Real-Time Business Insights
    title: "Real-Time Business Insights",
    desc: "Dashboards and analytics that inform decisions, not just report them",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />, // Rocket for Speed-to-Value Execution
    title: "Speed-to-Value Execution",
    desc: "Measurable ROI in weeks, not years",
  },
];

  const stats = [
    {
      value: "28%",
      label:
        "reduction in turnaround time for sales and support processes",
    },
    {
      value: "35%",
      label:
        "of improvement in after-sales service productivity",
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
        title={<>CRM Should Build Relationships — Not Frustrations</>}
        subtitle="Your CRM Isn’t a Tool. It’s Your Untapped Growth Engine."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://static.vecteezy.com/system/resources/previews/013/032/921/non_2x/abstract-wave-background-blue-gradient-waves-background-free-vector.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            CRM isn’t about contacts — it’s about contracts closed <br />
          </>
        }
        description="At  (Northsling), we rewire CRM from being a database into a decision-making, revenue-driving machine: intelligent, automated, and tailored to your business DNA.."
        points={[
          "360° customer intelligence that powers loyalty and repeat revenue",
          "Automated workflows that slash manual effort and accelerate sales cycles",
          "AI-driven insights to uncover upsell, cross-sell, and retention opportunities",
          "Industry-specific CRM playbooks customized for your growth model",
          "Real-time dashboards that arm leaders with instant, data-backed clarity",
        ]}
        stats={[
          {
            value: "$8.71",
            description: "average revenue return for every $1 spent on CRM ",
            source: "Nucleus Research.",
          },
          {
            value: "29%",
            description:
              "average increase in sales revenue after CRM implementation ",
            source: "Salesforce.",
          },
        ]}
        emphasisText="Every day on a broken CRM is a day lost in revenue, reputation, and retention."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Tomorrow’s -
            <span className="text-yellow-400">CRM Demands</span> Today
          </>
        }
        description="Forget static data entry systems. Modern CRMs must empower:"
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Northsling Reimagines CRM as a Growth Platform{" "}
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Northsling doesn’t just implement CRMs. We architect intelligent CRM ecosystems that drive loyalty, revenue, and responsiveness."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Retail Giant Boosts Loyalty with 25% More Repeat Purchases and 3x Engagement via Northsling . CRM."
        description="Northsling  deployed a modular, integrated CRM for a global retail enterprise to streamline B2B sales, service ticketing, and warranty claims."
        image="https://tse3.mm.bing.net/th/id/OIP.WnBIDw6gU_3nk555duI5WAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free CRM Health Audit"
        subheading="Uncover where your CRM is bleeding revenue — and how to fix it."
        find="You’ll get:"
        points={[
          "Full CRM performance and process audit",
          "Adoption, UX, and data diagnostics",
          "Revenue impact report and opportunity roadmap",
          "Free 45-min consult with a CRM strategist",
        ]}
        buttonText="Schedule Your Free Assessment"
        buttonAction={() => console.log("Button clicked!")}
      />
      <WhoWeAreSection
        tag="WHO WE ARE"
        title="At Northsling, excellence and innovation drive everything we do."
        description="We go beyond maintaining operations—we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape"
        stats={statsList}
        awards={awardsList}
        primaryColor="text-blue-600"
      />
      <ContactForm />
    </div>
  );
}

export default ParentCrm;
