import React from "react";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import ContactForm from "../../pages/success/ContactForm";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import WhoWeAre from "../Ui.jsx/WhoWeAre";
import { Cloud as CloudIcon, Server, Network, Database, Lock, ShieldCheck, BarChart3, Layers, Code2, Cpu, Globe, Monitor, LifeBuoy, Rocket, Zap, Target, Brain, FileCheck } from "lucide-react";


import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import CloudPartners from "./CloudPartners";
import PartnersSection from "./CloudPartners";
function Cloud() {
  const cloudPartners = [
  {
    name: "Amazon Web Services (AWS)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    benefit:
      "We engineer scalable, cost-efficient AWS cloud journeys — from initial assessment to post-migration tuning.",
    capabilities: [
      "Infrastructure assessment and cloud architecture planning",
      "Application and database migration (rehost, replatform, refactor)",
      "IAM, VPC, and backup configuration",
      "AWS cost and usage optimization",
    ],
  },
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    benefit:
      "From hybrid to multi-cloud, we enable secure, compliant Azure transformations tailored to enterprise IT realities.",
    capabilities: [
      "Azure readiness and workload assessment",
      "Lift-and-shift, replatforming, and PaaS adoption",
      "Azure AD setup, policy enforcement, and compliance alignment",
      "Integration with Microsoft 365, Defender, and beyond",
    ],
  },
  {
    name: "Google Cloud Platform (GCP)",
    logo: "https://tse3.mm.bing.net/th/id/OIP.EnfZxzTZTti-wUCqCCZTvAHaHO?rs=1&pid=ImgDetMain&o=7&rm=3",
    benefit:
      "We simplify GCP adoption with container-first, automation-led migration approaches that drive agility and insights.",
    capabilities: [
      "GCP architecture consulting and phased migration planning",
      "Compute Engine, GKE, and Cloud Storage migrations",
      "CI/CD pipeline design and integration",
      "IAM setup, cloud security, and budget controls",
    ],
  },
];
const features = [
    {
      icon: <Server className="w-7 h-7 text-yellow-400" />,
      altIcon: <CloudIcon  className="w-7 h-7 text-yellow-400" />,
      title: "Cloud-Native Architecture",
      desc: "Refactor legacy apps to take full advantage of native services, containers, and serverless frameworks.",
    },
    {
      icon: <Network className="w-7 h-7 text-yellow-400" />,
      altIcon: <Globe className="w-7 h-7 text-yellow-400" />,
      title: "Multi-Cloud Strategy",
      desc: "Distribute workloads across AWS, Azure, and GCP for cost, compliance, and resilience benefits.",
    },
    {
      icon: <Rocket className="w-7 h-7 text-yellow-400" />,
      altIcon: <Zap className="w-7 h-7 text-yellow-400" />,
      title: "Zero-Downtime Migration",
      desc: "Cutover without business disruption using automation, real-time sync, and rollback capabilities.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-yellow-400" />,
      altIcon: <Monitor className="w-7 h-7 text-yellow-400" />,
      title: "Auto-Scaling & Resilience",
      desc: "Handle traffic surges without over-provisioning or compromising performance.",
    },
    {
      icon: <Lock className="w-7 h-7 text-yellow-400" />,
      altIcon: <FileCheck className="w-7 h-7 text-yellow-400" />,
      title: "Security Built-In",
      desc: "End-to-end encryption, IAM policies, VPC configs, and audit trails embedded into the migration lifecycle.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      altIcon: <BarChart3 className="w-7 h-7 text-yellow-400" />,
      title: "Compliance-Ready Setups",
      desc: "Migrations aligned to ISO, GDPR, HIPAA, IRDAI, and regional mandates.",
    },
    {
      icon: <Database className="w-7 h-7 text-yellow-400" />,
      altIcon: <LifeBuoy className="w-7 h-7 text-yellow-400" />,
      title: "Post-Migration Monitoring",
      desc: "Continuous visibility into usage, costs, and performance with real-time dashboards and alerts.",
    },
  ];

  const uiFeatures = [
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      altIcon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Proven Multi-Cloud Expertise",
      desc: "End-to-end experience in AWS, Azure, and Google Cloud deployments across industries.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      altIcon: <Layers className="w-6 h-6 text-orange-500" />,
      title: "Certified Engineers, Real Outcome",
      desc: "Solutions led by AWS, Azure, and GCP certified architects and specialists.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-orange-500" />,
      altIcon: <Code2 className="w-6 h-6 text-orange-500" />,
      title: "Structured, Risk-Free Methodology",
      desc: "Discovery ➝ Planning ➝ Migration ➝ Optimization — executed with zero guesswork.",
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-orange-500" />,
      altIcon: <Monitor className="w-6 h-6 text-orange-500" />,
      title: "Post-Migration Support",
      desc: "Performance monitoring, cost control, and workload tuning built into our delivery model.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      altIcon: <Lock className="w-6 h-6 text-orange-500" />,
      title: "Security & Compliance at Core",
      desc: "From IAM and policy enforcement to VAPT and logging — no corner is cut.",
    },
  ];

  const stats = [
    {
      value: "22%",
      label:
        "faster query performance, boosting analytics efficiency",
    },
    {
      value: "31%",
      label: "reduction in operational overhead, driven by automation",
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
    <div className="">
      <HeroSection
        title={
          <>
 The Cloud Isn’t Just an Option Anymore.   <br />
It’s the Growth Platform.
       
        
          </>
        }
        subtitle="Stop Lifting-and-Shifting. Start Future-Proofing."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://img.freepik.com/premium-photo/photo-realistic-as-cloud-computing-service-models-with-saas-paas-iaas-icons-concept-as-vector-ic_980716-405211.jpg?w=2000"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
       Your Journey to the Cloud — Without the Risks
            <br />
          </>
        }
        description="Moving to the cloud isn’t just a lift-and-shift — it’s a strategic move that defines how fast and secure your business can grow.  At Northsling,we guide organizations through every stage of cloud adoption, from assessment and strategy to seamless migration."
        points={[
"Cloud readiness assessments to align strategy with business goals",
'Tailored migration roadmaps that minimize downtime and disruption',
'Multi-cloud and hybrid strategies designed for flexibility and scale',
'Secure migration frameworks to safeguard data and compliance',
'Post-migration optimization for cost, performance, and reliability',
        ]}
        stats={[
          {
            value: "63%",
            description:
              "of cloud-driven companies report higher revenue growth than industry peers, linking cloud adoption to business acceleration ",
            source: "SQ Magazine",
          },
          {
            value: "74%",
            description:
              "of CFOs confirm cloud investments deliver ROI within 12–18 months ",
            source: "SQ Magazine",
          },
        ]}
        emphasisText="Cloud Consulting & Migration isn’t just about moving workloads — it’s about building a foundation for growth, agility, and innovation."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Smart 
            <span className="text-yellow-400"> Cloud Migrations </span> Must Deliver  Today
          </>
        }
        description="Cloud transformation must go beyond ‘lift and shift.’ It must enable your business to operate faster, safer, and smarter."
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
     Why     Northling Cloud for Cloud Consulting & Migration<br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Northling helps enterprises shift from legacy infrastructure to scalable cloud environments — across AWS, Azure, and GCP — without breaking momentum."
        features={uiFeatures}
      />
    <PartnersSection
      title="Cloud Migration, the Northsling Way Through Our Partners"
      subtitle="Partnering with industry leaders to deliver seamless, secure, and cost-effective migration experiences across platforms."
      partners={cloudPartners}
      themeColor="orange"
    />

      <CaseStudySection
        tag="Case Study"
        title="22% Faster Queries & 31% Less Overhead: HealthTech Migration with Northsling"
        description="Northsling executed a secure, zero-downtime hybrid cloud migration for a HealthTech firm.
"
        image="https://intglobal.com/wp-content/uploads/2025/07/saas-concept-collage-1536x1023.jpg"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Cloud Migration Readiness Audit"
        subheading="Discover what’s slowing your migration down — and how to fix it fast."
        points={[
' Cloud readiness and workload mapping',
"Risk and cost estimation report",
"Security & compliance posture review",
"Optimization roadmap across AWS, Azure, or GCP"
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

export default Cloud;
