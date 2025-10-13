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
function ParentCms() {
  const features = [
    {
      icon: <Edit3 className="w-7 h-7 text-yellow-400" />,
      title: "Self-Serve Content Management",
      desc: "No-code editing, no IT bottlenecks.",
    },
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />,
      title: "Omnichannel Content Orchestration",
      desc: "Unified stories across all touchpoints.",
    },
    {
      icon: <Target className="w-7 h-7 text-yellow-400" />,
      title: "Personalized Experiences at Scale",
      desc: "AI-powered targeting and content variants.",
    },
    {
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      title: "Lightning-Fast Performance",
      desc: "SEO-first, mobile-optimized delivery.",
    },
    {
      icon: <Plug className="w-7 h-7 text-yellow-400" />,
      title: "Seamless Integrations",
      desc: "CRM, automation, analytics, ecommerce, and more.",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />,
      title: "Enterprise-Grade Security & Compliance",
      desc: "ISO 27001, GDPR-ready practices.",
    },
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />,
      title: "Scalable, Modular Architecture",
      desc: "Future-ready foundation for growth.",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-yellow-400" />,
      title: "Built-In Content Governance",
      desc: "Approval workflows, version control, and audit trails for brand consistency.",
    },
  ];

  const uiFeatures = [
    {
      icon: <Code2 className="w-6 h-6 text-orange-500" />,
      title: "Platform-Agnostic Expertise",
      desc: "Drupal, WordPress, Magento, Shopify, Contentful, Optimizely, and more.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      title: "Cloud-Native Foundations",
      desc: "AWS, Azure, GCP architectures built for resilience and scalability.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Security-First Delivery",
      desc: "ISO 27001, SOC 2, CMMI L3 certified protocols baked into every deployment.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: "AI-Powered Personalization",
      desc: "Content that adapts to the user, not the other way around.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
      title: "Composable & Modular Builds",
      desc: "Future-proof, API-first design for speed and flexibility.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: "Accelerators for Speed",
      desc: "Reusable templates, workflows, and DevOps automation reduce go-live time.",
    },
  ];

  const stats = [
    {
      value: "42%",
      label:
        "faster content publishing across marketing and product campaigns.",
    },
    {
      value: "100%",
      label: "compliance with internal and regulatory audit standards.",
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
        title={<>From Content Mess to Content Mastery</>}
        subtitle="Content Should Drive Growth — Not Chaos"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://tse1.explicit.bing.net/th/id/OIP.x2YaADumSuEWFbNGK_kzNAHaLG?w=683&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            Content That Moves as Fast as Your Market <br />
          </>
        }
        description="At Indus Net Technologies (Northsling), CMS means speed, control, and freedom — turning every content update into an opportunity to outpace competitors."
        points={[
          "   Publish in minutes, not days — no IT dependency",
          "Multi-channel content delivery from one source of truth",
          "Modular, future-proof architecture built to expand",
          "Multi-language/localization baked in for global scale",
          "Deep CRM & analytics integrations for measurable reach",
        ]}
        stats={[
          {
            value: "70%",
            description:
              "faster content publishing reduces time-to-market, driving competitive advantage",
            source: "Northsling. Analytics",
          },
          {
            value: "30%",
            description:
              "boost in customer engagement attributed to multi-channel CMS delivery (Coherent Market Insights).",
            source: "Maze",
          },
        ]}
        emphasisText="An outdated CMS isn’t just a bottleneck. It’s a growth blocker."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What High -
            <span className="text-yellow-400">
              Performance Content Platforms
            </span>{" "}
            Must Enable
          </>
        }
        description="Today’s marketing demands more than simple publishing. Enterprises expect:"
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northling Is the CMS Partner <br className="hidden md:block" />
            <span className="text-orange-500"> You Need</span>
          </>
        }
        sectionSubtitle="Northsling doesn’t just implement CMS solutions — we create digital ecosystems that grow with your brand."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Northsling's AI-Powered CMS Cuts Publishing Time by 42% for Leading Financial Institution"
        description="Replaced legacy CMS with a secure AI headless platform—faster publishing, compliant operations, and unified digital experiences."
        image="https://tse3.mm.bing.net/th/id/OIP.WnBIDw6gU_3nk555duI5WAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free CMS Performance Audit"
        subheading="Uncover what’s slowing your content velocity — and how to fix it."
        points={[
          "Content workflow and governance assessment",
          "SEO and UX audit",
          "Security and compliance gap analysis",
          "Personalized modernization roadmap",
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

export default ParentCms;
