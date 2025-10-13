import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import { User, Figma, Zap, ShieldCheck, Server, Plug, BarChart2, Layout, FileText, Cpu, Lock, Repeat, Leaf } from "lucide-react";

import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import ContactForm from "../../pages/success/ContactForm";

function ParentWebiste() {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      title: "Speed Optimization",
      desc: "Lightning-fast loading under 3 seconds to reduce drop-offs and boost SEO.",
    },
    {
      icon: <Figma className="w-7 h-7 text-yellow-400" />,
      title: "Responsive UX",
      desc: "Mobile-first, WCAG-compliant design that ensures accessibility for all users.",
    },
    {
      icon: <Server className="w-7 h-7 text-yellow-400" />,
      title: "Scalable Architecture",
      desc: "Headless, modular builds that evolve with your business needs.",
    },
    {
      icon: <Plug className="w-7 h-7 text-yellow-400" />,
      title: "Martech Integration",
      desc: "Seamless connectivity with CRM, CDP, CMS, analytics, and automation platforms.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      title: "Security by Design",
      desc: "SSL, DevSecOps, and compliance frameworks baked into every layer.",
    },
    {
      icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
      title: "Insight Dashboards",
      desc: "Role-based analytics that unlock real-time decision-making and CRO.",
    },
    {
      icon: <Layout className="w-7 h-7 text-yellow-400" />,
      title: "Content Agility",
      desc: "Structured CMS and atomic design systems for faster content updates.",
    },
    {
      icon: <FileText className="w-7 h-7 text-yellow-400" />,
      title: "Compliance Readiness",
      desc: "Built-in alignment with GDPR, SEBI, HIPAA, and other regulatory standards.",
    },
  ];
const uiFeatures = [
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />, // Speed
    title: "Speed",
    desc: "Every second counts. We engineer for <3s load times using CDN, lazy loading, code minification, and Core Web Vitals optimization.",
  },
  {
    icon: <Lock className="w-6 h-6 text-orange-500" />, // Security
    title: "Security",
    desc: "With DevSecOps, SOC2, and GDPR baked in, we protect user trust, ensure compliance, and prevent data risks before they appear.",
  },
  {
    icon: <Server className="w-6 h-6 text-orange-500" />, // Scalability
    title: "Scalability",
    desc: "Modular, headless builds and cloud-native infra mean your website grows with your business — without tech debt.",
  },
  {
    icon: <Figma className="w-6 h-6 text-orange-500" />, // UX Fluidity
    title: "UX Fluidity",
    desc: "Persona-driven designs, accessibility (WCAG 2.1 AA), and responsive UI ensure delightful journeys on every device.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-orange-500" />, // Sustainability
    title: "Sustainability",
    desc: "Low-carbon hosting, clean code, and CMS-driven updates reduce TCO and refresh cycles while meeting ESG goals.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // Compliance
    title: "Compliance",
    desc: "From SEBI and HIPAA to GDPR and WCAG, our redesigns meet global and industry-specific mandates — by design.",
  },
];
  const stats = [
  { value: "70%", label: "improvement in mobile usability score, enhancing multi-device user experience" },
  { value: "40%", label: "drop in bounce rate on key service pages, reflecting better navigation and content engagement" },
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
            Build <span className="text-green-400">Websites</span> That Convert{" "}
            <br />
            Not Just Exist.
          </>
        }
        subtitle="From concept to code, we create responsive, scalable websites that perform."
        primaryBtn="Start Your Project"
        secondaryBtn="Explore Our Work"
        bgImage="https://static.vecteezy.com/system/resources/thumbnails/030/605/270/small_2x/close-up-hand-programmer-working-on-their-professional-development-types-on-a-laptop-computer-keyboard-coding-language-user-interface-on-screens-generative-ai-free-photo.jpeg"
        ratings={[
          { name: "Upwork", rating: 4.8 },
          { name: "Trustpilot", rating: 4.6 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            A Website That Doesn’t Convert Is Dead Weight. <br />
          </>
        }
        description="At Indus Net Technologies (Northsling), redesign means a revenue engine — sleek, fast, and optimized to capture intent before it bounces."
        points={[
          "3-second load guarantee — or customers leave",
          "  CXO-friendly dashboards that show conversion lifts",
          "CRO-first layouts engineered to sell, not just look pretty",
          "SEO + performance baked in, not bolted on",
          "A/B-tested designs that prove ROI, not guess it",
        ]}
        stats={[
          {
            value: "49%",
            description:
              "higher average conversion rates from A/B tested website designs (scoop.market).",
            source: "Northsling. Analytics",
          },
          {
            value: "178%",
            description:
              "average annual conversion increase from visitor-focused redesigns",
            source: "Maze",
          },
        ]}
        emphasisText="Great design is more than looks — it's measurable business impact."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What High-Performing Enterprise Websites Must Absolutely Get Right
          </>
        }
        description="To drive outcomes, modern websites need to be more than just aesthetically pleasing. They must be engineered for speed, intelligence, compliance, and growth."
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling. Doesn’t Just Redesign Websites — We Reengineer Them
            Across 7 Dimensions
          </>
        }
        sectionSubtitle="Northsling. transforms enterprise websites across seven performance-critical dimensions to ensure your site becomes an active driver of revenue, reach, and resilience.

"
        features={uiFeatures}
      />
    <CaseStudySection
  tag="Case Study"
  title="DCB Bank Sees 2.3x Engagement & 40% Bounce Drop with Redesigned Website "
  description="Northsling. transformed DCB Bank’s outdated site into a responsive, accessibility-compliant platform with modern information architecture."
  image="https://img.freepik.com/premium-photo/ux-ui-designer-hand-holding-paper-mobile-wireframe_362389-1758.jpg"
  stats={stats}
  ctaText="Read full case study"
  ctaLink="#"
/>
<UxAuditSection
  logoText="NS"
  heading="Claim Your Free UX Audit"
  subheading="Is your website silently hurting your brand and pipeline?"
  points={[
    "Speed, UX, and Core Web Vitals audit",
    "Personalization & accessibility readiness report",
    "Martech and CRM integration landscape map",
    "Compliance & security gap analysis",
    "Tailored optimization roadmap"
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
<ContactForm/>
    </div>
  );
}

export default ParentWebiste;
