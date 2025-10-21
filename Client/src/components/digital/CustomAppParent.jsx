import React from 'react'
import {
  Brain,
  Globe,
  Target,
  Zap,
  Shield,
  ShieldCheck,
  Layers,
  FileCheck,
  Code2,
  Rocket,
} from "lucide-react";
import HeroSection from '../Ui.jsx/HeroSectionoUi';
import UiImpactSection from '../Ui.jsx/UiImpactSection';
import ModernUIDeliver from '../Ui.jsx/ModernUIDeliver';
import NorthslingUIDesigns from '../Ui.jsx/NorthslingUIDesigns';
import CaseStudySection from '../Ui.jsx/CaseStudySection';
import UxAuditSection from '../Ui.jsx/UxAuditSection';
import WhoWeAreSection from '../Ui.jsx/WhoWeAre';
import ContactForm from '../../pages/success/ContactForm';
function CustomAppParent() {
const features = [
  {
    icon: <Brain className="w-7 h-7 text-yellow-400" />, // Real-Time Workflowse -> intelligence
    title: "Real-Time Workflows",
    desc: "Mirror internal processes with intelligent automation.",
  },
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />, // Role-Based Interfaces -> global/omnichannel
    title: "Role-Based Interfaces",
    desc: "Custom UI for every stakeholder, from ops to CXOs.",
  },
  {
    icon: <Target className="w-7 h-7 text-yellow-400" />, // Embedded Intelligence -> predictive, precise
    title: "Embedded Intelligence",
    desc: "AI/ML to drive insights and automate routine actions.",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />, // Seamless Integration -> fast, instant
    title: "Seamless Integration",
    desc: "ERP, CRM, IoT, analytics — all connected.",
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />, // Scalable, Secure Delivery -> protection
    title: "Scalable, Secure Delivery",
    desc: "Cloud-native, mobile-ready, and compliant by design.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Lifecycle Agility -> verified security
    title: "Lifecycle Agility",
    desc: "Built to evolve as your business does.",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />, // Offline Resilience -> layered workflows
    title: "Offline Resilience",
    desc: "Operate in disconnected environments without data loss.",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // Unified User Experience -> verified completion
    title: "Unified User Experience",
    desc: "Consistent design and UX across web, mobile, and edge devices.",
  },
];

const uiFeatures = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />, // Domain-Driven Architecture -> coding/system design
    title: "Domain-Driven Architecture",
    desc: "Tailored to your industry, regulatory environment, and operating model — not off-the-shelf assumptions.",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Full-Stack Expertise -> modular layers
    title: "Full-Stack Expertise",
    desc: "1000+ experts across UX, cloud, DevOps, engineering, data, and AI — collaborating from strategy to delivery",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // Composable Builds -> security/compliance
    title: "Composable Builds",
    desc: "Modular, microservices-first architecture for faster releases and agile feature extensions.",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />, // Pre-Built Accelerators -> intelligence/automation
    title: "Pre-Built Accelerators",
    desc: "Design templates, integration kits, and reusable components to reduce go-live cycles and delivery risk.",
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />, // AI Inside -> global insights
    title: "AI Inside",
    desc: "Intelligent automation, contextual recommendations, and behavior-driven workflows built-in — not bolted on.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />, // Secure & Compliant -> fast launch
    title: "Secure & Compliant",
    desc: "Built to meet ISO, SOC 2, GDPR, and industry-specific mandates like SEBI, HIPAA, or RBI.",
  },
];
    
      const stats = [
        {
          value: "3X",
          label:
            "rise in digital transactions within six months of launch",
        },
        {
          value: "75%",
          label:
            "faster transactions—cutting average time from 20 to under 5 minutes.",
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
          title={<>Stop Adapting to Software —
Start Building Your Advantage</>}
          subtitle="Custom Apps Aren’t Just Systems Anymore. They’re Strategic Accelerators."
          primaryBtn="Schedule a Meeting"
          secondaryBtn="Read Success Stories"
          bgImage="https://th.bing.com/th/id/OIP.snOCo7y8gBUb7r0Qw9OJMwHaEK?w=323&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
          ratings={[
            { name: "Google", rating: 4.0 },
            { name: "Clutch", rating: 4.5 },
            { name: "Glassdoor", rating: 4.5 },
          ]}
        />
        <UiImpactSection
          title={
            <>
             No two businesses operate the same way — each has its own models, workflows, and pain points <br />
            </>
          }
          description="At  (Northsling), we build custom applications engineered around your exact operations — eliminating inefficiencies, strengthening security, and aligning technology to how your business truly runs."
          points={[
            "Tailored solutions built to your business model, not generic templates",
            "Streamlined workflows that remove process bottlenecks",
            "Enterprise-level security to keep operations resilient",
            "Seamless integration across existing systems for unified visibility",
            "Scalable, cloud-ready architecture that grows with your business",
          ]}
          stats={[
            {
              value: "40%",
              description: "increase in operational efficiency reported by businesses using custom apps .",
              source: "manektech.",
            },
            {
              value: "51%",
              description:
                "reduction in manual workflows and process bottlenecks via tailored solutions .",
              source: "dreamix.",
            },
          ]}
          emphasisText="A basic system supports. A custom app accelerates, unifies, and scales."
          titleColor="text-gray-900"
          descriptionColor="text-gray-700"
          pointColor="text-gray-800"
        />
        <ModernUIDeliver
          title={
            <>
              What Future -
              <span className="text-yellow-400">Ready Enterprise Apps</span> Must Deliver
            </>
          }
          description="Today’s enterprises demand more than functionality. They expect"
          features={features}
        />
        <NorthslingUIDesigns
          sectionTitle={
            <>
            Why Northsling Builds Custom Apps That Drive Competitive Advantage{" "}
              <br className="hidden md:block" />
            </>
          }
          sectionSubtitle="Northsling doesn’t just build applications — we craft digital platforms that express your unique logic, accelerate workflows, and scale with certainty."
          features={uiFeatures}
        />
        <CaseStudySection
          tag="Case Study"
          title="IndusInd Bank Gains 4x Returning Users with INT. Custom App Development."
          description="Northsling digitized IndusInd’s forex services with a real-time platform, mobile app, and instant KYC, replacing manual processes."
          image="https://tse3.mm.bing.net/th/id/OIP.WnBIDw6gU_3nk555duI5WAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
          stats={stats}
          ctaText="Read full case study"
          ctaLink="#"
        />
        <UxAuditSection
          logoText="NS"
          heading="Get a Free Application Performance & Security Audit"
          subheading="Uncover what’s slowing your platform down — and how to accelerate"
          points={[
            "UX and accessibility audit",
            "Performance benchmarking",
            "Code and architecture health check",
            "Integration and security diagnostics",
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
        <ContactForm />
      </div>
    );
}

export default CustomAppParent
