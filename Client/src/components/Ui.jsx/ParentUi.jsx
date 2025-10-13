import React from "react";
import HeroSection from "./HeroSectionoUi";
import UiImpactSection from "./UiImpactSection";
import ModernUIDeliver from "./ModernUIDeliver";
import NorthslingUIDesigns from "./NorthslingUIDesigns";
import CaseStudySection from "./CaseStudySection";
import UxAuditSection from "./UxAuditSection";
import WhoWeAre from "./WhoWeAre";
import ContactForm from "../../pages/success/ContactForm";
import {
  User,
  Figma,
  Zap,
  Accessibility,
  Settings,
  Briefcase,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import WhoWeAreSection from "./WhoWeAre";
function ParentUi() {
  const features = [
    {
      icon: <User className="w-7 h-7 text-yellow-400" />,
      title: "User-First Methodology",
      desc: "Behavior research, real-world testing, and emotional mapping drive every decision.",
    },
    {
      icon: <Figma className="w-7 h-7 text-yellow-400" />,
      title: "Figma-Centric Delivery",
      desc: "Tokenized design systems, reusable UI libraries, developer-ready workflows.",
    },
    {
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      title: "Speed-to-Value",
      desc: "Deliver MVPs in weeks, not quarters, with scalable design velocity.",
    },
    {
      icon: <Accessibility className="w-7 h-7 text-yellow-400" />,
      title: "Accessibility Built-In",
      desc: "WCAG 2.1, GDPR, HIPAA by default. Inclusivity is not optional.",
    },
    {
      icon: <Settings className="w-7 h-7 text-yellow-400" />,
      title: "DesignOps at Scale",
      desc: "Systems, not silos. Cohesion across teams, tools, and touchpoints.",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-yellow-400" />,
      title: "Cross-Industry Insights",
      desc: "BFSI, Healthcare, SaaS, and Retail best practices baked in.",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-yellow-400" />,
      title: "Conversion-Driven UX",
      desc: "Every pixel aligned with measurable business goals, not just aesthetics.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      title: "Continuous Design Optimization",
      desc: "Feedback loops and analytics-informed improvements at every release.",
    },
  ];

  const uiFeatures = [
    {
      icon: <User className="w-6 h-6 text-orange-500" />,
      title: "User-First Methodology",
      desc: "Behavior research, real-world testing, and emotional mapping.",
    },
    {
      icon: <Figma className="w-6 h-6 text-orange-500" />,
      title: "Figma-Centric Delivery",
      desc: "Tokenized design systems, reusable UI libraries, developer-ready.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Scalability",
      desc: "MVPs in weeks, not quarters.",
    },
    {
      icon: <Accessibility className="w-6 h-6 text-orange-500" />,
      title: "Accessibility Built-In",
      desc: "WCAG 2.1, GDPR, HIPAA by default.",
    },
  ];
  const stats = [
    {
      value: "54%",
      label: "Reduction in drop-offs during appointment booking.",
    },
    {
      value: "67%",
      label: "Increase in mobile diagnostic orders within 3 months of launch.",
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
            They <span className="text-blue-500">Click.</span> Or They Leave.{" "}
            <br />
            Your <span className="text-green-400">Interface</span> Decides.
          </>
        }
        subtitle="UI/UX That Turns Clicks into Customers — Your interface isn’t just how your product looks — it’s how it wins."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://tse4.mm.bing.net/th/id/OIP.50mb3uJ1vinmWlgt57eV1wHaEK?w=626&h=352&rs=1&pid=ImgDetMain&o=7&rm=3"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            UI Shapes the First Look. UX Shapes the Lasting Impact. <br />
          </>
        }
        description="At Indus Net Technologies (INT.), we fuse UI and UX into one competitive edge — sleek design backed by frictionless journeys that drive measurable outcomes."
        points={[
          "Intuitive interfaces that accelerate adoption",
          "Seamless flows that cut drop-offs and boost completions",
          "Research-driven design validated with real users",
          "Consistent design systems across web & mobile",
          "Measurable ROI: more engagement, more retention, more revenue",
        ]}
        stats={[
          {
            value: "52%",
            description: "increase in user engagement",
            source: "INT. Analytics",
          },
          {
            value: "35%",
            description: "reduction in drop-offs",
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
            What Modern <span className="text-yellow-400">UI/UX</span> Must
            Deliver
          </>
        }
        description="Forget pretty screens. Today’s enterprise UX must be intelligent, scalable, and measurable."
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Northsling Designs Interfaces That{" "}
            <br className="hidden md:block" />
            <span className="text-orange-500">Win Business</span>
          </>
        }
        sectionSubtitle="We don’t just design — we create experience engines built to perform."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Fintech Platform Boosts Data Completeness & Reduces Bounce Rate with "
        highlightedText="Northsling’s UI/UX Strategy"
        description="Northsling reimagined the UX of a fintech firm — empowering users to discover, book, and pay for diagnostics online effortlessly while driving measurable engagement."
        image="https://tse3.mm.bing.net/th/id/OIP.WnBIDw6gU_3nk555duI5WAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Claim Your Free UX Audit"
        subheading="Your interface might be costing you more than you think."
        points={[
          "Journey friction heatmap",
          "Mobile & accessibility compliance scan",
          "Competitor benchmark score",
          "Top 5 UX improvement recommendations",
        ]}
        buttonText="Schedule Your Free Assessment"
        buttonAction={() => console.log("Button clicked!")}
      />
   
<WhoWeAreSection
  tag="WHO WE ARE"
  title="At"
  highlightedText="Northsling"
  description="We go beyond maintaining operations—empowering businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape."
  stats={statsList}
  awards={awardsList}
  primaryColor="text-blue-600"
/>
      <ContactForm />
    </div>
  );
}

export default ParentUi;
