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

function ParentCpd() {
const features = [
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />, // Automation fits "Self-Serve Workflows"
    title: "Self-Serve Workflows",
    desc: "80%+ of user queries resolved through automated flows — without human intervention.",
  },
  {
    icon: <LayoutGrid className="w-7 h-7 text-yellow-400" />, // Layout/grid fits dashboards
    title: "Role-Based Dashboards",
    desc: "Personalized interfaces tuned to user type, behavior, and current journey stage.",
  },
  {
    icon: <Target className="w-7 h-7 text-yellow-400" />, // Target for recommendations
    title: "Smart Recommendations",
    desc: "AI-led nudges for product upgrades, renewals, and cross-sells that boost revenue.",
  },
  {
    icon: <Rocket className="w-7 h-7 text-yellow-400" />, // Rocket for full-lifecycle speed/automation
    title: "Full-Lifecycle Automation",
    desc: "Seamless onboarding, support, and feedback loops that reduce friction and costs.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // ShieldCheck for security/compliance
    title: "Security and Compliance",
    desc: "Encryption, MFA, and audit trails embedded from day one to meet regulatory demands.",
  },
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />, // Globe for insights/analytics (observability)
    title: "Observability and Insights",
    desc: "Built-in analytics that surface behavioral trends, funnel leaks, and engagement hotspots.",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />, // Layers for omnichannel continuity
    title: "Omnichannel Continuity",
    desc: "Consistent experiences across web, mobile, and chat without context-switching.",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // FileCheck for performance/validation
    title: "Performance at Scale",
    desc: "Fast, mobile-optimized UX with uptime and response times that match enterprise expectations.",
  },
];
  
 const uiFeatures = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />, // Code for architecture
    title: "Unified Architecture",
    desc: "One system, many personas — customers, partners, and internal teams, served via tailored UX.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />, // Zap for AI-powered actions
    title: "AI-Powered Personalization",
    desc: "Behavioral analytics and dynamic content targeting baked into every journey.",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Layers for modularity
    title: "Modular Engineering",
    desc: "Headless, component-based builds ready for rapid feature rollouts and global scaling.",
  },
  {
    icon: <Plug className="w-6 h-6 text-orange-500" />, // Plug for integrations
    title: "Plug & Play Integrations",
    desc: "Native connections with CRMs, ERPs, CMS, and payment systems — no custom-code chaos.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // ShieldCheck for security
    title: "Security by Design",
    desc: "DevSecOps practices, VAPT testing, RBAC, and MFA woven into infrastructure.",
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />, // Globe for real-time intelligence/global view
    title: "Real-Time Intelligence",
    desc: "Dashboards and telemetry tools that reveal how users behave — and how to serve them better.",
  },
];
 const stats = [
    {
      value: "62%",
      label:
        "fewer support requests, driven by streamlined self-service and backend sync",
    },
    {
      value: "3x",
      label: "rise in claim tracker adoption, enhancing transparency and reducing escalations",
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
    <div>
      <HeroSection
        title={<>Portals Built for Trust, Engagement, and Scale</>}
        subtitle="Turn every interaction into loyalty with portals designed to serve, connect, and grow."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://tse1.mm.bing.net/th/id/OIP.6FdnncQyqaPHPq9BMMJj6AHaJQ?w=1280&h=1600&rs=1&pid=ImgDetMain&o=7&rm=3"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            More than an entry point — your portal is where relationships start{" "}
            <br />
          </>
        }
        description="At Indus Net Technologies (Northsling.), we build portals that don’t just work but win: cutting support queues, driving transactions, and turning every login into loyalty."
        points={[
          "   Cut service costs with self-service adoption that sticks",
          "Win partner trust with seamless channel integration",
          "Boost speed-to-market with scalable, modular builds",
          "Fortify with enterprise-grade security & compliance",
          "Track every click to fuel sharper engagement strategies",
        ]}
        stats={[
          {
            value: "60%",
            description:
              "of customers prefer self-service portals for simple tasks . ",
            source: "document 360",
          },
          {
            value: "73%",
            description:
              "of customers prefer resolving issues through website portals .",
            source: "document 360",
          },
        ]}
        emphasisText="A basic portal serves. A modern portal sells, supports, and scales."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Experience -
            <span className="text-yellow-400">Driven Portals</span> Must Deliver
            Today
          </>
        }
        description="Modern enterprises expect portals that engage, convert, and scale — not just serve."
        features={features}
      />
      <NorthslingUIDesigns
              sectionTitle={
                <>
                Why Northsling Builds Portals That Perform <br className="hidden md:block" />
                  <span className="text-orange-500"> at Scale</span>
                </>
              }
              sectionSubtitle="Northsling doesn’t just build portals — we engineer engagement platforms designed to scale, sell, and support in real time."
              features={uiFeatures}
            />
              <CaseStudySection
                    tag="Case Study"
                    title="SBI General Insurance Cuts Support Requests 65% & Speeds Claims 40% with Northsling."
                    description="Northsling built multilingual, offline-ready portals for SBIG, digitizing rural claims and agent journeys with real-time tracking and faster rollouts."
                    image="data:image/webp;base64,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"
                    stats={stats}
                    ctaText="Read full case study"
                    ctaLink="#"
                  />
                    <UxAuditSection
                          logoText="NS"
                          heading="Get a Free Portal
Experience Audit"
                          subheading="Discover what’s slowing your portal down — and how to transform it."
                          points={[
                            "User journey friction audit",
                            "Personalization readiness score",
                            "Integration landscape mapping",
                            "Hidden automation opportunities report",
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

export default ParentCpd;
