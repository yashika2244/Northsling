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
  "https://th.bing.com/th?q=Monitor+Deloitte&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  "https://th.bing.com/th/id/OIP.95tyOykWTOm7ygQMbFVy0QAAAA?w=156&h=122&c=7&r=0&o=7&pid=1.7&rm=3",
  "/awards/duns1.png",
  "data:image/webp;base64,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",
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
        bgImage="https://tse4.mm.bing.net/th/id/OIP.O23Dv-k706Avkh7TYACi3wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
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
