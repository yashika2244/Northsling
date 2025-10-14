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
                    image="https://tse3.mm.bing.net/th/id/OIP.WnBIDw6gU_3nk555duI5WAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
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
