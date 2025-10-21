import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
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
  Settings,
  ZapOff,
  Activity,
} from "lucide-react";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import ContactForm from "../../pages/success/ContactForm";
function legency() {
const features = [
  {
    icon: <Rocket className="w-7 h-7 text-yellow-400 
    " />, // Faster Time-to-Value -> speed/ROI
    title: "Faster Time-to-Value",
    desc: "Agile, phased delivery that gets you ROI early.",
  },
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />, // Cloud-First Foundations -> cloud/global
    title: "Cloud-First Foundations",
    desc: "Scalable, containerized, microservices-ready.",
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />, // Secure by Design -> protection/security
    title: "Secure by Design",
    desc: "Compliance (HIPAA, GDPR, SOC2) baked into architecture.",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />, // Zero Downtime Rollouts -> fast/instant
    title: "Zero Downtime Rollouts",
    desc: "Canary/blue-green deployments minimize disruption.",
  },
  {
    icon: <Settings className="w-7 h-7 text-yellow-400" />, // Smart Integrations -> configuration / integration
    title: "Smart Integrations",
    desc: "Seamless API hooks into CRMs, ERPs, and analytics.",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />, // Legacy System Interoperability -> layers/bridging old+new
    title: "Legacy System Interoperability",
    desc: "Connects old and new tech stacks without rework.",
  },
  {
    icon: <Activity className="w-7 h-7 text-yellow-400" />, // Smart Integrations / analytics -> activity
    title: "Role-Based Analytics",
    desc: "Role-based analytics that unlock real-time decision-making and CRO.",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // Team Enablement -> completion / onboarding
    title: "Team Enablement",
    desc: "DevOps coaching, playbooks, and knowledge transfer embedded in delivery.",
  },
];

const uiFeatures = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />, // End-to-End Ownership -> coding/system
    title: "End-to-End Ownership",
    desc: "From legacy audit to go-live, we manage every step of the journey with dedicated delivery pods and clear accountability.",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Legacy Fluency + Modern Stack Mastery -> layered architecture
    title: "Legacy Fluency + Modern Stack Mastery",
    desc: "We bridge the gap with deep expertise in COBOL, .NET, and AS/400 — while building future-ready architectures on cloud-native stacks.",
  },
  {
    icon: <ZapOff className="w-6 h-6 text-orange-500" />, // Zero-Disruption Execution -> downtime prevention
    title: "Zero-Disruption Execution",
    desc: "Our phased migration approach, canary deployments, and rollback protocols ensure your business never skips a beat.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />, // Security & Compliance First -> verified secure
    title: "Security & Compliance First",
    desc: "We embed SOC2, GDPR, HIPAA, and ISO protocols into code, infra, and process — not as an afterthought.",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />, // Speed Without Sacrifice -> intelligence / efficiency
    title: "Speed Without Sacrifice",
    desc: "Our Shape Up cycles, dual-track agile, and automation-first mindset shrink timelines without compromising quality.",
  },
  {
    icon: <Target className="w-6 h-6 text-orange-500" />, // Industry-Specific Playbooks -> precise domain targeting
    title: "Industry-Specific Playbooks",
    desc: "BFSI, Healthcare, Manufacturing, or Pharma — our domain-aware modernization frameworks reduce risk and amplify outcomes.",
  },
];

  const stats = [
    {
      value: "63%",
      label: "faster transaction processing post-modernization",
    },
    {
      value: "54%",
      label:
        "freduction in maintenance overhead by eliminating legacy dependencies",
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
        title={<>Outpace Obsolescence. Modernize What Matters Most.</>}
        subtitle="Reimagine, Replatform, Reclaim Your Competitive Edge"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://th.bing.com/th/id/R.86007b0b857265c33a643ea0ba162000?rik=%2by1lpTBLI1CTHg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fAbstract-hd-wallpapers-1920x1080.jpg&ehk=hrJkPuV83hT%2btJLJ5rJ7dNHn6SrIdZiFvuL1xRMBK%2fQ%3d&risl=&pid=ImgRaw&r=03"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Old systems weren’t built for today’s speed, scale, or security{" "}
            <br />
          </>
        }
        description="We at Indus Net Technologies (Northsling) turn outdated platforms into modern, cloud-ready engines that accelerate transformation and unlock new growth."
        points={[
          "Re-architected applications that replace complexity with speed and simplicity",
          "Cloud-first modernization for cost efficiency and scalability",
          "API-led integration that connects legacy with modern ecosystems",
          "Stronger security and compliance baked into every layer",
          "Future-proof architectures designed to adapt as your business evolves",
        ]}
        stats={[
          {
            value: "70%",
            description:
              "reduction in operational costs reported by organizations after modernizing legacy systems ",
            source: "ViitorCloud.",
          },
          {
            value: "33%",
            description:
              " increase in employee productivity observed following legacy modernization initiatives, due to faster, more reliable systems ",
            source: "Acropolium.",
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
            What Enterprises
            <span className="text-yellow-400">
              Expect from Modernization
            </span>{" "}
            Today
          </>
        }
        description="Modernization isn’t just about infrastructure. It’s about innovation."
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Is the Modernization Partner of Choice{" "}
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Modernizing legacy systems requires more than tech tools — it demands a partner with vision, discipline, and battle-tested playbooks."
        features={uiFeatures}
      />
         <CaseStudySection
                tag="Case Study"
                title="Somax boosted efficiency and scaled operations 3x through Northsling’s legacy system modernization."
                description="Somax, a B2B enterprise, transitioned from monolithic legacy systems to a cloud-native, AI-integrated architecture with automated workflows and APIs."
                image="https://th.bing.com/th/id/OIP.dUgWXH9rgS0j0BWv-dZYawHaE8?w=371&h=202&c=7&r=0&o=7&pid=1.7&rm=3"
                stats={stats}
                ctaText="Read full case study"
                ctaLink="#"
              />
               <UxAuditSection
                        logoText="NS"
                        heading="Get Your Legacy Out of the Way — And Your Business Ahead"
                        points={[
                          "Risk and ROI assessment of your legacy stack",
                          "Migration roadmap tailored to your industry",
                          "Free prototype of one module or workflow",
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

export default legency;
